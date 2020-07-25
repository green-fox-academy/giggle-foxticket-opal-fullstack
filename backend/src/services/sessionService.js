const jwt = require('jsonwebtoken');
import { getUser } from '../repository/UserRepository';

module.exports = {
  login: async data => {
    if (!data.username || !data.password) {
      return res.status(401).json({ Message: 'Username or Password is missing' });
    } else {
      const user = await getUser(data);
      return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET || 'testing');
    }
  },

  verifyToken: token => {
    try {
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      res.sendStatus(400).send('Invalid Token');
    }
  },
};
