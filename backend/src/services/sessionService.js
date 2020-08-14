import jwt from 'jsonwebtoken';
import { UserRepository } from '../repository/UserRepository';

export class SessionService {
  constructor() {
    this.userRepository = new UserRepository()
  }
  async login(data) {
    if (!data.username || !data.password) {
      throw new Error('Username or Password is missing');
    } else {
      const user = await this.userRepository.getUser(data.username);
      if (user.results.length <= 0) {
        throw new Error('Username is incorrect');
      } else if (user.results[0].password !== data.password) {
        throw new Error('Password is incorrect');
      } else {
        const tokenData = {
          user_id: user.results[0].id,
          user_name: user.results[0].name,
          user_isAdmin: user.results[0].isAdmin,
        };
        return jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET);
      }
    }
  }
  verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
}

