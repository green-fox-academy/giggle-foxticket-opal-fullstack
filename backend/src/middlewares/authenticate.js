import { SessionService } from '../services/sessionService';

const sessionService = new SessionService()

export const authenticate =  (req, res, next) => {
  const user = sessionService.verifyToken(req.body.token);

  if (!user) {
    res.status(401).json({ message: 'Access Denied' });
  } else {
    req.user = user;
    console.log('this is req ' + JSON.stringify(req.user));
    next();
  }
};
