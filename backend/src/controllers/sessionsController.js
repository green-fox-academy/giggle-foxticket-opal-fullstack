import { createToken } from '../services/sessionService';

export const sessionsController = {
  post( req, res) {
    const user = req.body;
    const token = createToken(user);
    res.json({ token : token});
  },
};
