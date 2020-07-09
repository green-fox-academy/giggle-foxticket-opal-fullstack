import User from '../models/User';
import { UserService } from '../services/UserService';

export class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async register(req, res) {
    const user = new User(req.body.name, req.body.email, req.body.password);
    try {
      let data = await this.userService.registerUser(user);
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}
