import { login } from './sessionService';
import { UserRepository } from '../repository/UserRepository';
import jwt from 'jsonwebtoken';


jest.mock('../repository/UserRepository')
jest.mock('jsonwebtoken')

test('It should return ', async () => {
 
  const resp = { user : { results :[{ id:1, name:"Lehel", email:'lehel@gmail.com', password: 'dummy2', isAdmin: 0 } ]} }
  

   
  UserRepository.prototype.getUser.mockResolvedValue(() =>
  Promise.resolve(resp));

  const fakeTokenResp = { message : "Im_a_fake-token:Yeppp"}
  jwt.sign.mockResolvedValue(fakeTokenResp)

  let result = await login({ username: 'dummy1', password: 'dummy2' });

  expect(UserRepository.login()).toHaveBeenCalledWith( 'dummy1' , 'dummy2' );
  expect(jwt.sign()).toMatchObject({ message : "Im_a_fake-token:Yeppp"});
  
});
