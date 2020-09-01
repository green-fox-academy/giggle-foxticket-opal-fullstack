import express from 'express';
import bodyParser from 'body-parser';
import { helloController, sessionsController } from '../controllers';
import { UserController } from '../controllers/UserController';
import { TicketTypesController } from '../controllers/ticketTypesController';
import { validateUser } from '../middlewares/validators/userValidator';
import { AuthenticateMiddleware } from '../middlewares/authenticate';
import { admin_auth } from '../middlewares/admin_auth';
import { SubscribeController } from '../controllers/SubscribeController';
import { validateSubscriber } from '../middlewares/validators/subscribeValidator';

const cors = require('cors');

const router = express.Router();
const userController = new UserController();
const subscribeController = new SubscribeController()
const authenticateMiddleware = new AuthenticateMiddleware()
const ticketTypesController = new TicketTypesController()

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);

router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});

router.post('/subscription', validateSubscriber, (req, res) => {
  subscribeController.subscribe(req, res);
});
router.post('/session', sessionsController.post);

router.use(authenticateMiddleware.authenticate);

router.use(admin_auth); 
router.get('/ticket-types', ticketTypesController.get);
router.post('/ticket-types', ticketTypesController.post);
router.put('/ticket-types/:id', ticketTypesController.put);
router.delete('/ticket-types/:id', ticketTypesController.delete);


export default router;
