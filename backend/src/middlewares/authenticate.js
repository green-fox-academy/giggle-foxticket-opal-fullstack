import { SessionService } from '../services/sessionService';

const sessionService = new SessionService();

export const authenticate = (req, res, next) => {
  const auth_header = req.headers.authorization;
  const token = auth_header.split(' ')[1];

  const user = sessionService.verifyToken(token);

  if (!user) {
    res.status(401).json({ message: 'Access Denied' });
  } else {
    req.user = user;
    console.log('this is req ' + JSON.stringify(req.user));
    next();
  }
};
