import request from 'supertest';

import App from '../src/app';
import Subscriber from '../src/models/Subscriber';
import { UserService } from '../src/services/UserService';
import router from '../src/routes/api.routes';

jest.mock('../src/services/UserService');

describe('testing /api/subscription endpoint', () => {
  const invalidSubscriber = new Subscriber('{invalid_user*3@', 'not_an_email');
  const validSubscriber = new Subscriber('Tomi', 'asd@qwer.com');

  const api = request(new App([router], 3000).app);

  it('fails with 400 if invalid subscriber credentials are passed', async () => {
    UserService.prototype.subscribeUser.mockImplementation(() =>
      Promise.reject(invalidSubscriber)
    );

    await api
      .post('/api/subscription')
      .send(invalidSubscriber)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
  });

  it('passes with 201 if valid subscriber credentials are passed', async () => {
    UserService.prototype.subscribeUser.mockImplementation(() => {
      Promise.resolve(validSubscriber);
    });

    await api
      .post('/api/subscription')
      .send(validSubscriber)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
  });
});
