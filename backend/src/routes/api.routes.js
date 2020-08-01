import express from 'express';
import bodyParser from 'body-parser';
import { helloController, sessionsController } from '../controllers';
import { UserController } from '../controllers/UserController';

import { validateUser } from '../middlewares/validators/userValidator';

const cors = require('cors');

const router = express.Router();
const userController = new UserController();

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);

router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});
router.post('/session');
router.post('/session', sessionsController.post);

export default router;
