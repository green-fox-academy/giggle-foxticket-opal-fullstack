export class SessionController {
  constructor({ sessionService }) {
    this.sessionService = sessionService;
  }

  async post(req, res) {
    const user = req.body;
    try {
      const data = await this.sessionService.login(user);
      res.json(data);
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  }
}
