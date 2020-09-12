import jwt from 'jsonwebtoken';
import assert from 'assert';

import { SessionService } from './SessionService';

jest.mock('jsonwebtoken');

describe('sessionService', () => {
  it('should correctly login an existing user', async () => {
    const data = {
      username: 'Lehel',
      password: 'password',
    };

    const expectedData = {
      isAdmin: 1,
      token: { user_id: 1, user_isAdmin: 1, user_name: 'Lehel' },
      user: 'Lehel',
    };

    const passwordValidationService = {
      passwordCheck: async () => {
        return true;
      },
    };

    const userRepository = {
      getUser: async () => {
        return {
          results: [
            {
              id: 1,
              name: 'Lehel',
              email: 'test@test.com',
              password: 'password',
              isAdmin: 1,
            },
          ],
        };
      },
    };

    const sessionService = new SessionService({
      userRepository,
      passwordValidationService,
    });

    await jwt.sign.mockImplementation((data, sec) => {
      return data;
    });

    assert.deepStrictEqual(await sessionService.login(data), expectedData);
  });

  it('should throw an error if user is invalid', async () => {
    const data = {
      username: 'Marci',
      password: 'password',
    };

    const userRepository = {
      getUser: async () => {
        return {
          results: [],
        };
      },
    };

    const passwordValidationService = {
      passwordCheck: async () => {
        return true;
      },
    };

    const sessionService = new SessionService({
      userRepository,
      passwordValidationService,
    });

    try {
      await sessionService.login(data);
    } catch (err) {
      assert.deepStrictEqual(err.message, 'Username is incorrect');
    }
  });

  it('should throw an error of invalid PASSWORD', async () => {
    const data = {
      username: 'Lehel',
      password: 'invalid_password',
    };

    const userRepository = {
      getUser: async () => {
        return {
          results: [
            {
              id: 1,
              name: 'Lehel',
              email: 'test@test.com',
              password: 'password',
              isAdmin: 1,
            },
          ],
        };
      },
    };

    const passwordValidationService = {
      passwordCheck: async () => {
        return false;
      },
    };

    const sessionService = new SessionService({
      userRepository,
      passwordValidationService,
    });

    try {
      await sessionService.login(data);
    } catch (err) {
      assert.deepStrictEqual(err.message, 'Password is incorrect');
    }
  });
});
