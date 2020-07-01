const jwt = require('jsonwebtoken');

export const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return false;
  }
}

