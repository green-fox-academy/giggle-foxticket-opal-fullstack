export class OrderController {
  constructor({ orderService, sessionService }) {
    this.orderService = orderService;
    this.sessionService = sessionService;
  }

  async createOrderWithTicket(req, res) {
    try {
      const token = req.headers['authorization'].split(' ')[1];

      const getToken = await this.sessionService.verifyToken(
        token,
        process.env.ACCESS_TOKEN_SECRET
      );

      const data = await this.orderService.create(
        req.body.ticket_type_id,
        getToken.user_id
      );

      res.status(201).json(data);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }

  async updateOrder(req, res) {
    try {
      const data = await this.orderService.update(
        req.params.id,
        req.body.ticket_status
      );

      res.status(201).json(data);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}
