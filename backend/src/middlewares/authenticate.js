import { verifyToken } from '../services/sessionService';

export const authenticate = (req, res, next) => {
  const user = verifyToken(req.body.auth_token);
  console.log(res)
  if (!user) {
    return res.sendStatus(401).send('Access Denied');
    
  } else {
    req.user = user;
    next();
  }
};
