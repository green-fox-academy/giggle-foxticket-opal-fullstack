import Subscriber from '../models/Subscriber';

export class SubscribeController {
  constructor({ userService }) {
    this.userService = userService;
  }

  async subscribe(req, res) {
    try {
      const data = await this.userService.subscribeUser(
        new Subscriber(req.body.name, req.body.email)
      );
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}
