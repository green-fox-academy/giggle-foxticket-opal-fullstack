import request from 'supertest';
import app from '../src/app';
<<<<<<< HEAD

describe('testing /register endpoint', () => {
  const mockApp = request(app).post('/register');
  it('fails if invalid user credentials are passed', async () => {
    await mockApp
      .send({
        name: '{invalid_user*3@',
        password: 'short',
        email: 'not_an_email',
      })
=======
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
>>>>>>> f44fe68051f91423937edbb1c185b5707a206933
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });
<<<<<<< HEAD
  it('passes if valid user credentials are passed', async () => {
    await mockApp
      .send({
        name: 'ValidUser',
        password: 'correcthorsebatterystaple',
        email: 'valid@email.com',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
  });
});

// TODO: find out why only an empty array is being sent
// {"errors": [{"location": "body", "msg": "Username is required", "param": "name"}
// {"location": "body", "msg": "E-mail is required.", "param": "email"}
// {"location": "body", "msg": "Password is required", "param": "password"}]}
=======

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
>>>>>>> f44fe68051f91423937edbb1c185b5707a206933
