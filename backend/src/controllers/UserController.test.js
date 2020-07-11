import { UserController } from './UserController';
import User from '../models/User';
import { UserService } from '../services/UserService';

jest.mock('../services/UserService');

it('should correctly register new User', async () => {
  const userController = new UserController();

  const user = new User(
    'Marci',
    'testemail@test.com',
    'correcthorsebatterystaple'
  );
  UserService.prototype.registerUser.mockImplementation(() =>
    Promise.resolve(user)
  );

  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  const req = { body: user };
  const res = mockResponse();

  await userController.register(req, res);

  expect(res.json).toBeCalledWith(user);
  expect(res.status).toBeCalledWith(201);
});
