import { AuthenticateMiddleware } from '../src/middlewares/authenticate';

jest.mock('jsonwebtoken');

const valid_input = { headers: { authorization: 'Bearer Some.JWT.5-Token' } };
const invalid_input = { headers: { authorization: '**********' } };

describe('Testing authenticate middleware', () => {
  it('It should fail with 401 Authorization token is missing', async () => {
    const authenticateMiddleware = new AuthenticateMiddleware({});

    const mockResponse = () => {
      const res = {};
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      return res;
    };

    const res = mockResponse();

    authenticateMiddleware.authenticate(invalid_input, res, () => {
      expect(res.status()).toEqual(401);
    });
  });

  it('It should pass with 200 ok ', async () => {
    const response = {
      user_id: 2,
      user_name: 'Vivien',
      user_isAdmin: 1,
      iat: 1597923575,
    };

    const next = jest.fn(() => console.log('next was called'));

    const sessionService = {
      verifyToken: async () => {
        return valid_input;
      },
    };

    const authenticateMiddleware = new AuthenticateMiddleware({
      sessionService,
    });

    authenticateMiddleware.authenticate(valid_input, response, next);
    expect(next).toHaveBeenCalled();
  });
});
