import { registerService } from '../services/registerService';

export const registerController = {
  async register(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    await registerService.registerUser({
      username: username,
      email: email,
      password: password,
    });

    res.status(200).json({
      username,
      email,
      password,
    });
  },
};
