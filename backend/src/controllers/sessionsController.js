<<<<<<< HEAD
//Create a controller for managing the sessions that handles the /api/sessions requests.
=======
import { createToken } from '../services/sessionService';

export const sessionsController = {
  post(req, res) {
    const user = req.body;
    const token = createToken(user);
    res.json({ token });
  },
};
>>>>>>> 975a394f7a482fc57bbdc895127b33c91d029caa
