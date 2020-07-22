import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
import { UserController } from '../controllers/UserController';
import { sessionsController } from '../controllers/sessionsController';
import { ticketTypesController } from '../controllers/ticketTypesController';
import { validateUser } from '../middlewares/validators/userValidator';

const router = express.Router();
const userController = new UserController();

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);
router.get('/ticket-types', ticketTypesController.get);

router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});
router.post('/session', sessionsController.post);

export default router;
