import User from '../models/User';
import { registerService } from '../services/registerService';

export const registerController = {
  async register(req, res) {
    const user = new User(req.body.name, req.body.email, req.body.password);

    return await registerService
      .registerUser(user)
      .then(data => res.status(201).json(data))
      .catch(err => {
        res.status(400).json(err.message);
      });
  },
};
