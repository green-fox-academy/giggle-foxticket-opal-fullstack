import User from '../models/User';
import { registerService } from '../services/registerService';

export const registerController = {
  async register(req, res) {
    const user = new User(req.body.username, req.body.email, req.body.password);

    await registerService.registerUser(user);

    res.status(200).json({
      username: user.username,
      email: user.email,
      password: user.password,
    });
  },
};
