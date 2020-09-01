import request from 'supertest';
import app from '../src/app';
import { UserRepository } from '../src/repository/UserRepository';
import { PasswordValidation } from '../src/services/pass_validatorService';
import jwt from 'jsonwebtoken';

jest.mock('../src/services/pass_validatorService');
jest.mock('../src/repository/UserRepository');
jest.mock('jsonwebtoken');

describe('Testing /api/session endpoint ', () => {
  it('It should response with an error ', async () => {
    const userResult = {
      id: 1,
      name: 'Lehel',
      email: 'test@test.com',
      password: 'password123',
      isAdmin: 1,
    };

    const response = { results: [userResult] };

    UserRepository.prototype.getUser.mockImplementation(() =>
      Promise.resolve(response)
    );

    jwt.sign.mockImplementation((data, sec) => {
      return data;
    });

    await request(app)
      .post('/api/session')
      .set('Content-Type', 'application/json')
      .send({ username: 'Lehel' })
      .expect('Content-Type', /json/)
      .expect(401);
  });

  it('It should login the user ', async () => {
    UserRepository.prototype.getUser.mockImplementation(() =>
      Promise.resolve({ results: [{ id: 'dummy_id' }] })
    );

    PasswordValidation.prototype.passwordCheck.mockImplementation(() =>
      Promise.resolve({
        results: [
          {
            user_id: 2,
            user_name: 'Vivien',
            user_email: 'test@test.com',
            user_password:
              '$2b$10$9K8uV6EmwFnSU0gNZsiTv.wtsTFAr6SEzH4OcaADRZVOpTyczEIA6',
            user_isAdmin: 1,
          },
        ],
      })
    );

    const x = await request(app)
      .post('/api/session')
      .send({ username: 'Vivien', password: 'password1223' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(x.body.token).toHaveProperty('user_id');
  });
});
