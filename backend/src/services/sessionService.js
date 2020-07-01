// create and read jwt token
const jwt = require('jsonwebtoken');

module.exports = {
  createToken: data => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  },

  verifyToken: token => {
    try {
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  },
  decode: token => {
    return jwt.decode(token, { complete: true });
  },
};

