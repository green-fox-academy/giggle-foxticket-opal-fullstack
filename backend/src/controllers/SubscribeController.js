import Subscriber from "../models/Subscriber";
import { UserService } from '../services/UserService';
import { EmailService } from '../services/EmailService'

export class SubscribeController {
  constructor() {
    this.userService = new UserService();
  }

  async subscribe(req, res) {

    const subscriberData ={
      name: req.body.name,
      email: req.body.email
    }

    const subscriber = new Subscriber(subscriberData.name, subscriberData.email);

    try {
      let data = await this.userService.subscribeUser(subscriber);
      EmailService.sendMail (
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
