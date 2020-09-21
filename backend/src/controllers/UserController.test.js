import { UserController } from './UserController';
import { UserService } from '../services/UserService';
import User from '../models/User';

it('should correctly register new User', async () => {
  const user = new User(
    'Marci',
    'testemail@test.com',
    'correcthorsebatterystaple'
  );

  const userRepository = {
    getUserData: async () => {
      return { results: [] };
    },

    save: async () => {
      return user;
    },
  };

  const userService = new UserService({ userRepository });
  const userController = new UserController({ userService });

  await userService.registerUser(user);

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
