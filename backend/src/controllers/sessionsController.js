//Create a controller for managing the sessions that handles the /api/sessions requests.

import { createToken } from '../services/sessionService';

export const sessionsController = {
  post(req, res) {
    const user = req.body;
    const token = createToken(user);
    res.header('auth_token', token).send(token);

  },
};
