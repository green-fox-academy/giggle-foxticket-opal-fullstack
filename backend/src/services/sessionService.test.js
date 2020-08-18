import jwt from 'jsonwebtoken';
import { SessionService } from './sessionService';
import { UserRepository }  from '../repository/UserRepository';


jest.mock('../repository/UserRepository')
jest.mock('jsonwebtoken')

test('It should response with a mocked-token', async () => {
  const sessionService = new SessionService()
  const user = {username:"Lehel", password:"password"}
  const userResult = {id:1, name: "Lehel" , email: "test@test.com", password:"password", isAdmin: 1 }
  const response = {results:[userResult]}
  
  UserRepository.prototype.getUser.mockReturnValue(response)
  jwt.sign = jest.fn()
  jwt.sign.mockReturnValue("Im_a_mocked_tocken123") 
  
sessionService.login(user)

process.env.ACCESS_TOKEN = "asd"
expect(jwt.sign).toHaveBeenCalledWith({ user_id:1 , user_isAdmin: 1, user_name:"Lehel"}, "asd")

})

test('It should response with an error message -> Username or Password is missing' , async()=>{
  const sessionService = new SessionService();
  const invalid_user = {username:"Lehel"}
  const userResult = {id:1, name: "Lehel" , email: "test@test.com", password:"password", isAdmin: 1 }
  const response = {results:[userResult]}
  
  UserRepository.prototype.getUser.mockReturnValue(response)
  jwt.sign = jest.fn()
  jwt.sign.mockReturnValue("Im_a_mocked_tocken123") 
  
sessionService.login(invalid_user)

expect(sessionService.login()).toBe('Username or Password is missing')
})

/* 
  const invalid_user2 = {username:"XxOoXx", password:"WrongPasswordBoy"}
  const invalid_user3 = {username:"Lehel", password:"WrongPasswordBoy"}
expect(sessionService.login(user)).toBe("asdsadsada")
expect(sessionService.login).toBe('Username is incorrect')
expect(sessionService.login).toBe('Password is incorrect') */
