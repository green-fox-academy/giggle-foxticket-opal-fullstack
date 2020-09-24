export class AuthenticateMiddleware {
  constructor({ sessionService }) {
    this.sessionService = sessionService;
  }

  authenticate(req, res, next) {
      if (
        req.headers.authorization &&
        req.headers.authorization.includes('Bearer')
      ) 
      {
        const token = req.headers.authorization.split(' ')[1];
        req.user = this.sessionService.verifyToken(token);
        next();
      } 
      else {
        res
        .status(401)
        .json({ message: `Access Denied due to invalid token` });
      }
   }
}
