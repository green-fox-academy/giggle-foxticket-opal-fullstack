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
            id: 'dummy_id',
            name: 'Hulk Hogan',
            isAdmin: true,
          },
        ],
      })
    );

    PasswordValidationService.prototype.passwordCheck.mockImplementation(() =>
      Promise.resolve({})
    );

    const data = await api
      .post('/api/session')
      .send({ username: 'Hulk Hogan', password: 'password1223' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    console.log(data.body);

    expect(data.body).toStrictEqual({
      token: {
        user_id: 'dummy_id',
        user_name: 'Hulk Hogan',
        user_isAdmin: true,
      },
      user: 'Hulk Hogan',
      isAdmin: true,
    });
  });
});
