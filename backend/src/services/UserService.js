import bcrypt from 'bcrypt';
import { UserRepository } from '../repository/UserRepository';
import User from '../models/User';

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
    console.log('UserService constructor');
  }
  async registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    let temp = [];
    await this.userRepository.getUserData(user.name, user.email).then(data => {
      temp = data.results;
    });

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