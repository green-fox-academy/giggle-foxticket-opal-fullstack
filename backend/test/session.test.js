import request from 'supertest';
import App from '../src/app';
import jwt from 'jsonwebtoken';
import router from '../src/routes/api.routes';
import { PasswordValidationService } from '../src/services/PasswordValidationService';
import { UserRepository } from '../src/repository/UserRepository';

jest.mock('jsonwebtoken');
jest.mock('../src/services/PasswordValidationService');
jest.mock('../src/repository/UserRepository');

describe('Testing /api/session endpoint ', () => {
  const api = request(new App([router], 3000).app);

  it('It should respond 401', async () => {
    const userResult = {
      id: 1,
      name: 'Lehel',
      email: 'test@test.com',
      password: 'password123',
      isAdmin: 1,
    };

    const response = { results: [userResult] };

    const userRepository = {
      getUser: async () => {
        return response;
      },
    };

    await userRepository.getUser();

    jwt.sign.mockImplementation((data, sec) => {
      return data;
    });

    await api
      .post('/api/session')
      .set('Content-Type', 'application/json')
      .send({ username: 'Lehel' })
      .expect('Content-Type', /json/)
      .expect(401);
  });

  it('It should login the user ', async () => {
    UserRepository.prototype.getUser.mockImplementation(() =>
      Promise.resolve({
        results: [
          {
            token: 'jwtToken',
            id: 'dummy_id',
            isAdmin: true,
          },
        ],
      })
    );

    PasswordValidationService.prototype.passwordCheck.mockImplementation(() =>
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

    const data = await api
      .post('/api/session')
      .send({ username: 'Vivien', password: 'password1223' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(data.body).toStrictEqual({
      isAdmin: true,
      token: { user_id: 'dummy_id', user_isAdmin: true },
    });
  });
});
