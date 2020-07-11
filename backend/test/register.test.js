import request from 'supertest';
import app from '../src/app';
import User from '../src/models/User';
import { UserService } from '../src/services/UserService';

jest.mock('../src/repository/UserRepository');
jest.mock('../src/services/UserService');

describe('testing /api/users endpoint', () => {
  it('fails with 422 if invalid user credentials are passed', async () => {
    const invalidUser = new User('{invalid_user*3@', 'short', 'not_an_email');

    UserService.prototype.registerUser.mockImplementation(() =>
      Promise.reject(invalidUser)
    );

    await request(app)
      .post('/api/users')
      .send(invalidUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });

  it('passes with 201 if valid user credentials are passed', async () => {
    const validUser = new User('marci', 'marci@marci.com', '123123123');

    UserService.prototype.registerUser.mockImplementation(() =>
      Promise.resolve(validUser)
    );

    const mockRegister = await request(app)
      .post('/api/users')
      .send(validUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);

    expect(mockRegister.body).toEqual(validUser);
  });
});
