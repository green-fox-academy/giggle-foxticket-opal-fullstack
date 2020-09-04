import Subscriber from '../models/Subscriber';
import { UserService } from '../services/UserService';

export class SubscribeController {
  constructor() {
    this.userService = new UserService();
  }

  async subscribe(req, res) {
    const subscriber = new Subscriber(req.body.name, req.body.email);
    try {
      let data = await this.userService.subscribeUser(subscriber);
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}
