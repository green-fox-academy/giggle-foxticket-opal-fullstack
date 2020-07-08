import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
<<<<<<< HEAD
import { UserController } from '../controllers/UserController';
import { validateUser } from '../middlewares/validators/userValidator';
=======
import { sessionsController } from '../controllers';
import { verifyToken } from '../services/sessionService'
>>>>>>> 975a394f7a482fc57bbdc895127b33c91d029caa

const router = express.Router();
const userController = new UserController();

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);
<<<<<<< HEAD
router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});
router.post('/session');
=======
router.post('/session', sessionsController.post)
>>>>>>> 975a394f7a482fc57bbdc895127b33c91d029caa

export default router;
