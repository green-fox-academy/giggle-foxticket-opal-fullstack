const jwt = require('jsonwebtoken');

module.exports = {
  createToken: data => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET || 'testing');
  },

  verifyToken: token => {
    try {
      const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      return req.user = verified;
    } catch (err) {
      res.sendStatus(400).send('Invalid Token');
    }
  }
};
