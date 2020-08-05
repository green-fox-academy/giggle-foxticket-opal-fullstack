import request from 'supertest';
import app from '../src/app';

import Subscriber from '../src/models/Subscriber';
import { UserService } from '../src/services/UserService';


jest.mock('../src/repository/SubscriberRepository');
jest.mock('../src/services/UserService');


describe('testing /api/subscription endpoint', () => {
  it('fails with 400 if invalid subscriber credentials are passed', async () => {
    const invalidSubscriber = new Subscriber('{invalid_user*3@', 'not_an_email');

    UserService.prototype.subscribeUser.mockImplementation(() =>
      Promise.reject(invalidSubscriber)
    );

    await request(app)
      .post('/api/subscription')
      .send(invalidSubscriber)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
  });

  it('passes with 201 if valid subscriber credentials are passed', async () => {
    const validSubscriber = new Subscriber('Tomi', 'asd@qwer.com');

    UserService.prototype.subscribeUser.mockImplementation(() =>
      Promise.resolve(validSubscriber)
    );

    const mockRegister = await request(app)
      .post('/api/subscription')
      .send(validSubscriber)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);

    expect(mockRegister.body).toEqual(validSubscriber);
  });
});