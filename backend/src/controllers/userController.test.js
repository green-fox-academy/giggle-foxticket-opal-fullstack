import { userController } from './userController';
import User from '../models/User';
const userService = require('../services/userService');

describe('register controller test', () => {
  const res = {
    status: function (s) {
      this.status = s;
      return this;
    },
    json: function (s) {
      this.json = s;
      return this;
    },
  };

  it('should return 400 if service throws an error', async () => {
    const user = new User('MarciDaKiNG', 'not_valid_email', '123123');
    const req = { body: user };

    const registerUser = jest.fn();
    registerUser.mockImplementation(() => {
      throw new Error('invalid register');
    });

    await userController
      .register(req, res)
      .catch(res => expect(res.status).toEqual(400));
  });

  it('should return 201 with user credentials from session if session data is set', async () => {
    const user = new User('McDog Doggerson', 'valid@valid.com', '12312das3');
    const req = { body: user };

    // const registerUser = jest.fn();

    const registerMock = jest.spyOn(userService.userService.registerUser, 'registerUser');
    registerMock.mockReturnValue(user);

    await userController.register(req, res).catch(res => {
      expect(res.status).toEqual(201);
    });
  });
});
