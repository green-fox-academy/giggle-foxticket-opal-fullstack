import { SessionService } from '../services/sessionService'

 const sessionService = new SessionService()

export const sessionsController = {
  async post(req, res) {
    const user = req.body;
    try {
      const data = await sessionService.login(user);
      res.json({ 
        token: data.token,
        user: data.user,
        isAdmin: data.isAdmin
      }); 
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  },
};
