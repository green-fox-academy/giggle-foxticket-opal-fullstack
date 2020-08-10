import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
import { UserController } from '../controllers/UserController';
import { sessionsController } from '../controllers';
import { validateUser } from '../middlewares/validators/userValidator';
import { SubscribeController } from '../controllers/SubscribeController';
import { validateSubscriber } from '../middlewares/validators/subscribeValidator';

const router = express.Router();
const userController = new UserController();
const subscribeController = new SubscribeController()

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);

router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});
router.post('/session');
router.post('/session', sessionsController.post);

router.post('/subscription', validateSubscriber, (req, res) => {
  subscribeController.subscribe(req, res);
});

export default router;
