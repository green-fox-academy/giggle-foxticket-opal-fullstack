import { AuthenticateMiddleware } from '../src/middlewares/authenticate';
import { SessionService } from '../src/services/sessionService';

jest.mock('../src/services/sessionService');

const valid_input = { headers: { authorization: 'Bearer Some.JWT.5-Token' } };
const invalid_input = { headers: { authorization: '**********' } };

describe('Testing authenticate middleware', () => {
  it('It should fail with 401 Authorization token is missing', () => {
    const authenticateMiddleware = new AuthenticateMiddleware();
    const next = jest.fn(x => console.log('next was called'));
    const mockResponse = () => {
      const res = {};
      res.status = 401;
      res.json = 'hi';
      return res;
    };

    const resp = mockResponse();
    authenticateMiddleware.authenticate(invalid_input, resp, next);
    expect(resp.status).toBe(401);
  });

  it('It should pass with 200 ok ', async () => {
    const authenticateMiddleware = new AuthenticateMiddleware();

    const response = {
      user_id: 2,
      user_name: 'Vivien',
      user_isAdmin: 1,
      iat: 1597923575,
    };
    const next = jest.fn(x => console.log('next was called'));

    SessionService.prototype.verifyToken.mockImplementation(() =>
      Promise.resolve(response)
    );

    authenticateMiddleware.authenticate(valid_input, response, next);
    expect(next).toHaveBeenCalled();
  });
});
