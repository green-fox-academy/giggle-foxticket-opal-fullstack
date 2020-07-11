import bcrypt from 'bcrypt';
import { registerRepository } from '../repository/registerRepository';
import User from '../models/User';

export const registerService = {
  async registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    let temp = [];
    await registerRepository.getUserData(user.name, user.email).then(data => {
      temp = data.results;
    });

    if (temp.length !== 0) {
      throw new Error('Username or e-mail already exists!');
    } else {
      await registerRepository.saveUser(
        new User(user.name, user.email, hashedPassword)
      );
    }

    return user;
  },
};
