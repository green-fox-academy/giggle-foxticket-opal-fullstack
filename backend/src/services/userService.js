import bcrypt from 'bcrypt';
import { userRepository } from '../repository/userRepository';
import User from '../models/User';

export const userService = {
  async registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    let temp = [];
    await userRepository.getUserData(user.name, user.email).then(data => {
      temp = data.results;
    });

    if (temp.length !== 0) {
      throw new Error('Username or e-mail already exists!');
    } else {
      await userRepository.save(
        new User(user.name, user.email, hashedPassword)
      );
    }

    return user;
  },
};
