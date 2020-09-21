import Subscriber from '../models/Subscriber';

export class SubscribeController {
  constructor({ userService, emailService }) {
    this.userService = userService;
    this.emailService = emailService
  }

  async subscribe(req, res) {

    const subscriberData ={
      name: req.body.name,
      email: req.body.email
    }

    try {
      const data = await this.userService.subscribeUser(
        new Subscriber(subscriberData.name, subscriberData.email)
      );
      this.emailService.sendMail (
        'Foxticket-project <fox@ticketservice.org>',
         subscriberData.email,
        'Successful Subscription',
        `Dear ${subscriberData.name}!
         You've succefully subscribe to our newsletter. Thank you!` )
      res.status(201).json(data);
    } catch (err) {
      console.log('subscribecontroller errorban vagyunk')
      res.status(400).json(err.message);
    }
  }
}
