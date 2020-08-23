import { SessionService } from '../services/sessionService';

const sessionService = new SessionService();

export class AuthenticateMiddleware {
  constructor() {}

  authenticate(req, res, next) {
    try { 
      const token = req.headers.authorization.split(' ')[1];
      const user = sessionService.verifyToken(token);
      req.user = user;
      console.log(res.statusCode)
      next();
    } catch (error) {
      console.log(error.message)
      res.status(401).json({ message:` Access Denied due to ${error.message}` });
    }
  }
}
