import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
import { userController } from '../controllers/userController';
import { validateUser } from '../middlewares/validators/userValidator';

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get);
router.post('/users', validateUser, userController.register);
router.post('/session');

export default router;
