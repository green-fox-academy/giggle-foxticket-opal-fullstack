import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
import { UserController } from '../controllers/UserController';
import { validateUser } from '../middlewares/validators/userValidator';
import { sessionsController } from '../controllers';
import { verifyToken } from '../services/sessionService'

const router = express.Router();
const userController = new UserController();

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);
router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});
router.post('/session');
router.post('/session', sessionsController.post)

export default router;
