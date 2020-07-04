import User from '../models/User';
import { userService } from '../services/userService';

export const userController = {
  async register(req, res) {
    const user = new User(req.body.name, req.body.email, req.body.password);

    return await userService
      .registerUser(user)
      .then(data => res.status(201).json(data))
      .catch(err => {
        res.status(400).json(err.message);
      });
  },
};
