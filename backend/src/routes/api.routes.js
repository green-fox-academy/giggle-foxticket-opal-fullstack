import express from 'express';
import bodyParser from 'body-parser';
import { helloController } from '../controllers';
import { validateUser } from '../middlewares/validators/userValidator';
import { admin_auth } from '../middlewares/admin_auth';
import { validateSubscriber } from '../middlewares/validators/subscribeValidator';
import { container, setup } from '../../di-setup';
import { ticketController } from '../controllers';


const cors = require('cors');
setup();
const router = express.Router();

const orderController = container.resolve('orderController');
const userController = container.resolve('userController');
const subscribeController = container.resolve('subscribeController');
const ticketTypesController = container.resolve('ticketTypesController');
const authenticateMiddleware = container.resolve('authenticateMiddleware');
const sessionController = container.resolve('sessionController');

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);

router.get('/tickets', (req, res) => {
  ticketController.get(req, res);
});

router.post('/users', validateUser, (req, res) => {
  userController.register(req, res);
});

router.post('/subscription', validateSubscriber, (req, res) => {
  subscribeController.subscribe(req, res);
});

router.post('/session', (req, res) => {
  sessionController.post(req, res);
});

router.use((req, res, next) =>
  authenticateMiddleware.authenticate(req, res, next)
);

router.use(admin_auth);

router.post('/orders', (req, res) => {
  orderController.createOrderWithTicket(req, res);
});

router.patch('/orders/:id', (req, res) => {
  orderController.updateOrder(req, res);
});

router.get('/ticket-types', (req, res) => {
  ticketTypesController.get(req, res);
});
router.post('/ticket-types', (req, res) => {
  ticketTypesController.post(req, res);
});
router.put('/ticket-types/:id', (req, res) => {
  ticketTypesController.put(req, res);
});
router.delete('/ticket-types/:id', (req, res) => {
  ticketTypesController.delete(req, res);
});

export default router;
