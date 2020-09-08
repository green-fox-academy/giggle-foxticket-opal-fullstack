import jwt from 'jsonwebtoken';
import { SessionService } from './sessionService';
import { UserRepository } from '../repository/UserRepository';
import { PasswordValidation } from '../services/pass_validatorService'

jest.mock('../repository/UserRepository');
jest.mock('../services/pass_validatorService')
jest.mock('jsonwebtoken');

describe('Testing api/session route , login function', () => {
  it('should correctly login an existing user', async () => {
    const sessionService = new SessionService();

    UserRepository.prototype.getUser.mockImplementation(() =>
      Promise.resolve({ results: [{ id: 1, name: 'Lehel', email: 'test@test.com', password: 'password', isAdmin: 1 }]
    })
    );

    PasswordValidation.prototype.passwordCheck.mockResolvedValue({
      results: [{ id: 1, name: 'Lehel', email: 'test@test.com', password: 'password', isAdmin: 1 }]
    })

    jwt.sign.mockImplementation((data, sec) => {
      return data;
    });

    let test_results = await sessionService.login({ username: 'Lehel', password: 'password' });

    expect(jwt.sign).toHaveBeenCalled();
    expect(test_results).toStrictEqual({ 
      isAdmin: 1,
      token: {
        user_id: 1,
        user_isAdmin: 1,
        user_name: 'Lehel'
      },
      user: 'Lehel'
  });
  });

  it('It should throw an error of missing inputs', async () => {
    const sessionService = new SessionService();
    const invalid_user = { username: 'Lehel' };

    try {
      await sessionService.login(invalid_user);
    } catch (e) {
      expect(e.message).toMatch('Username or Password is missing');
    }    
  });

  it('It should throw an error of invalid USER', async () => {
    const sessionService = new SessionService();
    const invalid_user2 = { username: 'XXXxxxXXX', password: 'password' };
    const badResponse = { results: [] };

    UserRepository.prototype.getUser.mockImplementation(() => 
    Promise.resolve(badResponse));

    try {
      await sessionService.login(invalid_user2);
    } catch (e) {
      expect(e.message).toMatch('Username is incorrect');
    }
  });

  test('It should throw an error of invalid PASSWORD ', async () => {
    const sessionService = new SessionService();
    const invalid_user3 = { username: 'Lehel', password: 'XXXxxxXXX' };
    const userResult = { id: 1, name: 'Lehel', email: 'test@test.com', password: 'password', isAdmin: 1 };
    const response = { results: [userResult] };

    UserRepository.prototype.getUser.mockImplementation(() =>
      Promise.resolve(response)
    );

    try {
      await sessionService.login(invalid_user3);
    } catch (e) {
      expect(e.message).toMatch('Password is incorrect');
    }
  });
});
 