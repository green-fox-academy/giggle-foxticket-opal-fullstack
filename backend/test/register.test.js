import request from 'supertest';
import app from '../src/app';
import User from '../src/models/User';
import { UserService } from '../src/services/UserService';

jest.mock('../src/repository/UserRepository');
jest.mock('../src/services/UserService');

describe('testing /api/users endpoint', () => {
  const mockApp = request(app).post('/api/users');

  it('fails if invalid user credentials are passed', async () => {
    const invalidUser = {
      name: '{invalid_user*3@',
      password: 'short',
      email: 'not_an_email',
    };

    UserService.prototype.registerUser.mockImplementation(() =>
      Promise.reject(invalidUser)
    );
    await mockApp
      .send(invalidUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });

  it('passes if valid user credentials are passed', async () => {
    const user = new User('marci', 'marci@marci.com', '123123123');

    UserService.prototype.registerUser.mockImplementation(() =>
      Promise.resolve(user)
    );
    const mockRegister = await request(app)
      .post('/api/users')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);

    expect(mockRegister.body).toEqual(user);

    // // expect(mockRegister.body).toHaveProperty('name');
    // expect(mockRegister.body.name).toBe('marci');
    // expect(mockRegister.statusCode).toBe(201);
  });
});
