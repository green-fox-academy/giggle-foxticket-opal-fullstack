import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
import { UserController } from '../controllers/UserController';
import { sessionsController } from '../controllers/sessionsController';
import { ticketTypesController } from '../controllers/ticketTypesController';
import { validateUser } from '../middlewares/validators/userValidator';
import { authenticate } from '../middlewares/authenticate'
import { admin_auth } from '../middlewares/admin_auth'

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

//Test token
router.use(authenticate)

router.post('/test',  (req , res) =>{
  res.json({ mssg: "success" , token: req.body })
});

//test admin
router.use(admin_auth)

router.post('/testadmin', (req ,res) =>{
  res.json({ mssg: " admin ok " , token: req.body })
} );

export default router;
