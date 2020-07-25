import sessionService from '../services/sessionService';

export const sessionsController = {
 async post(req, res) {
    const user = req.body;
    const token = await sessionService.login(user);

    res.json({ token });
  },
};
