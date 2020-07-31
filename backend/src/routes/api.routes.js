import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
import { UserController } from '../controllers/UserController';
import { sessionsController } from '../controllers/sessionsController';
import { ticketTypesController } from '../controllers/ticketTypesController';
import { validateUser } from '../middlewares/validators/userValidator';
import { authenticate } from '../middlewares/authenticate';
import { admin_auth } from '../middlewares/admin_auth';

const router = express.Router();
const userController = new UserController();

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);

router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});

router.post('/session', sessionsController.post);

router.use(authenticate);

router.use(admin_auth);
router.get('/ticket-types', ticketTypesController.get);

export default router;
