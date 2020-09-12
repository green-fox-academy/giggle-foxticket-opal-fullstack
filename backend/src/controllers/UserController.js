import User from '../models/User';

export class UserController {
  constructor({ user, userService }) {
    this.user = user;
    this.userService = userService;

    this.register = this.register.bind(this);
  }

  async register(req, res) {
    try {
      const data = await this.userService.registerUser(
        new User(req.body.name, req.body.email, req.body.password)
      );
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}
