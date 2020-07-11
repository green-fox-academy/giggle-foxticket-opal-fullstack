import express from 'express';
import bodyParser from 'body-parser';
import { registerController } from '../controllers/registerController';
import { validateUser } from '../middlewares/userValidator';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.post('/', validateUser, registerController.register);

export default router;
