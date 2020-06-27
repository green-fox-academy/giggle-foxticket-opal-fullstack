import { registerService } from '../services/registerService';
import { User } from '../models/User';

export const registerController = {
  async register(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    await registerService.registerUser(new User(username, email, password));

    res.status(200).json({
      username,
      email,
      password,
    });
  },
};
