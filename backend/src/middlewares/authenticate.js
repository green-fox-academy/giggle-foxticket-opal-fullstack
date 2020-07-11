import { verifyToken } from '../services/sessionService';

export const authenticate = (req, res, next) => {
  const token = verifyToken(req.body.auth_token);
  if (!token) return res.sendStatus(401).send('Access Denied');
  next();
};
