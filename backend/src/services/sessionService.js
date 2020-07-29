import jwt from 'jsonwebtoken'
import { getUser } from '../repository/UserRepository';

module.exports = {
  login: async data => {
    if (!data.username || !data.password) {
      throw new Error('Username or Password is missing');
    } else {
      const user = await getUser(data);
      if (!user || user[0].password !== data.password) {
        throw new Error('Username or Password is incorrect');
      } else {
        const tokenData = {
          user_id: user.id,
          user_name: user.name,
          user_isAdmin: user.isAdmin,
        };

        return jwt.sign(
          tokenData,
          process.env.ACCESS_TOKEN_SECRET || 'testing'
        );
      }
    }
  },

  verifyToken: token => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  },
};
