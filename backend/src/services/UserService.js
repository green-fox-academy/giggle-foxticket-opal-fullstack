import bcrypt from 'bcrypt';
import { UserRepository } from '../repository/UserRepository';
import { SubscriberRepository } from '../repository/SubscriberRepository';
import User from '../models/User';
import Subscriber from '../models/Subscriber';

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.subscriberRepository = new SubscriberRepository();
    console.log('UserService constructor');
  }

  async subscribeUser(subscriber) {
    await this.subscriberRepository.subscribe(new Subscriber(subscriber.name, subscriber.email));
    return subscriber;
  }

  async registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    let temp = [];
    let data = await this.userRepository.getUserData(user.name, user.email);
    temp = data.results;

    if (temp.length !== 0) {
      throw new Error('Username or e-mail already exists!');
    } else {
      await this.userRepository.save(
        new User(user.name, user.email, hashedPassword)
      );
    }

    return user;
  }
}
