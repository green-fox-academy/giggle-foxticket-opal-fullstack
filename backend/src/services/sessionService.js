const jwt = require('jsonwebtoken');

module.exports = {
  createToken: data => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  },

  decode: token => {
    return jwt.decode(token, { complete: true });
  },
};

