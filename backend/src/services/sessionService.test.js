import jwt from 'jsonwebtoken';
import { SessionService } from './sessionService';
import { UserRepository } from '../repository/UserRepository';

jest.mock('../repository/UserRepository');
jest.mock('jsonwebtoken');

describe('Testing api/session route , login function', () => {
  it('should correctly login an existing user', async () => {
    const user = { username: 'Lehel', password: 'password' };
    const userResult = { id: 1, name: 'Lehel', email: 'test@test.com', password: 'password', isAdmin: 1 };
    const response = { results: [userResult] };

    const sessionService = new SessionService();

    UserRepository.prototype.getUser.mockImplementation(() =>
      Promise.resolve(response)
    );

    jwt.sign.mockImplementation((data, sec) => {
      return data;
    });

    let test_results = await sessionService.login(user);

    expect(jwt.sign).toHaveBeenCalled();
    expect(test_results).toStrictEqual({ user_id: 1, user_name: 'Lehel', user_isAdmin: 1 });
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
 