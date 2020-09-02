import { SessionService } from '../services/sessionService';

const sessionService = new SessionService();

export class AuthenticateMiddleware {
  constructor() {}

  authenticate(req, res, next) {
    try { 
      if(req.headers.authorization  && req.headers.authorization.includes("Bearer")){
        const token = req.headers.authorization.split(' ')[1];
        const user = sessionService.verifyToken(token);
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(401).json({ message:` Access Denied due to ${error.message}` });
    }
  }
}
