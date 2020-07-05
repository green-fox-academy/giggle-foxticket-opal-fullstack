jest.mock('../services/userService');

import { userController } from './userController';
import User from '../models/User';
import { userService } from '../services/userService';

describe('register controller test', () => {
  const user = new User();
  const mockRequest = { body: user };

  it('should return 400 if service throws an error', async () => {
    const mockResponse = {
      status: function (s) {
        this.status = s;
        return this;
      },
      json: function (s) {
        this.json = s;
        return this;
      },
    };

    const registerUser = jest.fn();
    registerUser.mockImplementation(() => {
      throw new Error('invalid register');
    });

    userService.registerUser.mockResolvedValue({ user });

    await userController
      .register(mockRequest, mockResponse)
      .catch(res => expect(res.status).toEqual(400));
  });

  it('should return 201 if an user is passed', async () => {
    const mockJson = jest.fn();

    const mockResponse = {
      status: jest.fn().mockReturnValue({ json: mockJson }),
    };

    userService.registerUser.mockResolvedValue({
      user,
    });

    await userController.register(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockJson).toHaveBeenCalledWith({
      user,
    });
  });
});
