import request from 'supertest';
import app from '../src/app';
import { UserRepository } from '../src/repository/UserRepository';
import jwt from 'jsonwebtoken';

jest.mock('../src/repository/UserRepository');
jest.mock('jsonwebtoken');

describe('Testing /api/session endpoint ', () => {
  it('It should response with an error ', async () => {
    const InvalideUser = { username: 'Lehel' };
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
      .send(InvalideUser)
      .expect('Content-Type', /json/)
      .expect(401);
  });

  it('It should login the user ', async () => {
    const ValideUser = { username: 'Vivien', password: 'password1223' };
    const userResult = {
      id: 2,
      name: 'Vivien',
      email: 'test@test.com',
      password: 'password1223',
      isAdmin: 1,
    };
    const response = { results: [userResult] };

    UserRepository.prototype.getUser.mockImplementation(() =>
      Promise.resolve(response)
    );

   const x = await request(app)
      .post('/api/session')
      .send(ValideUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

      expect(x.body.token).toHaveProperty('user_name',"Vivien");
      expect(x.body.token).toHaveProperty('user_isAdmin', 1);

  }); 

});
