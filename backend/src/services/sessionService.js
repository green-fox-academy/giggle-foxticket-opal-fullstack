const jwt = require('jsonwebtoken');


module.exports = {
  createToken: data => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET || 'testing');
  },

   authenticate : (req, res, next) => {
    const token = req.header('auth_token');
    if (!token) return res.sendStatus(401).send('Access Denied');
  
    try {
      const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.sendStatus(400).send('Invalid Token');
    }
  }
};
