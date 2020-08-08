import jwt from 'jsonwebtoken';
import { UserRepository } from '../repository/UserRepository';

const userRepository = new UserRepository();

module.exports = {
  login: async data => {
    if (!data.username || !data.password) {
      throw new Error('Username or Password is missing');
    } else {
      const user = await userRepository.getUser(data.username, data.password);

      if (user.results[0] <= 0 || user.results[0].password !== data.password) {
        throw new Error('Username or Password is incorrect');
      } else {
        const tokenData = {
          user_id: user.results[0].id,
          user_name: user.results[0].name,
          user_isAdmin: user.results[0].isAdmin,
        };
        return jwt.sign(
           tokenData ,
          process.env.ACCESS_TOKEN_SECRET ,
        );
      }
    }
  },

  verifyToken: token => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  },
};
