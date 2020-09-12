import request from 'supertest';

import router from '../src/routes/api.routes';
import App from '../src/app';
import User from '../src/models/User';
import { UserService } from '../src/services/UserService';

jest.mock('../src/services/UserService');

describe('/api/users endpoint', () => {
  const invalidUser = new User('{invalid_user*3@', 'short', 'not_an_email');
  const validUser = new User('Vivien', 'test@test.com', 'password1223');

  const api = request(new App([router], 3000).app);

  it('fails with 422 if invalid user credentials are passed', async () => {
    await api
      .post('/api/users')
      .send(invalidUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });

  it('passes with 201 if valid user credentials are passed', async () => {
    UserService.prototype.registerUser.mockImplementation(() => {
      Promise.resolve(validUser);
    });

    await api
      .post('/api/users')
      .send(validUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
  });
});
