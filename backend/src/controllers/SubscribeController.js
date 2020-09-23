import Subscriber from '../models/Subscriber';

export class SubscribeController {
  constructor({ userService, emailService }) {
    this.userService = userService;
    this.emailService = emailService
  }

  async subscribe(req, res) {

    const {name, email} = req.body

    try {
      const data = await this.userService.subscribeUser(
        new Subscriber(name, email)
      );
      this.emailService.sendMail (
        'Foxticket-project <fox@ticketservice.org>',
         email,
        'Successful Subscription',
        `Dear ${name}!
         You've succefully subscribe to our newsletter. Thank you!` )
      res.status(201).json(data);
    } catch (err) {
      console.log('subscribecontroller errorban vagyunk')
      res.status(400).json(err.message);
    }
  }
}
