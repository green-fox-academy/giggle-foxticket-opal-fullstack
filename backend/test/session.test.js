import request from 'supertest';
import app from '../src/app';
import { UserRepository } from '../src/repository/UserRepository'

 
jest.mock('../src/repository/UserRepository');
 
describe('Testing /api/session endpoint ', () => {
  it('It should pass with 200 ok ', async () => {

    const ValideUser = { username: 'Lehel', password: 'password123' };
    const userResult = {id:1, name: "Lehel" , email: "test@test.com", password:"password123", isAdmin: 1 }
    const response = {results:[userResult]}

    UserRepository.prototype.getUser.mockReturnValue(response)

    await request(app)
      .post('/api/session')
      .set('Content-Type', 'application/json')
      .send(ValideUser)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
