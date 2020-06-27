import { User } from '../models/User';
import bcrypt from 'bcrypt';

export const registerController = {
  async register(req, res) {
    const hash = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    res.status(200).json({
      username: user.username,
      email: user.email,
      password: user.password,
    });
  },
};
