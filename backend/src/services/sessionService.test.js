import jwt from 'jsonwebtoken';
import { SessionService } from './sessionService';
import { UserRepository } from '../repository/UserRepository';


jest.mock('../repository/UserRepository')
jest.mock('jsonwebtoken')

test('It should  ', async () => {
  const sessionService = new SessionService()
 
  const user ={results :[{ id:1, name:"Lehel", email:'lehel@gmail.com', password: 'dummy2', isAdmin: 0 } ]} 
  UserRepository.prototype.getUser.mockResolvedValue(() =>
  Promise.resolve(user));

  const fakeTokenResp = { message : "Im_a_fake-token:Yeppp"}
  jwt.sign.mockResolvedValue(fakeTokenResp)

  let result = await sessionService.login({ username: 'dummy1', password: 'dummy2' });

  expect(UserRepository.login).toHaveBeenCalledWith( 'dummy1' , 'dummy2' )
  expect(jwt.sign()).toMatchObject({ message : "Im_a_fake-token:Yeppp"});
  expect(result).toEqual(" ")
});
