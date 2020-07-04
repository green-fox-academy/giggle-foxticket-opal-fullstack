import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import { helloController } from '../controllers';
import { sessionsController } from '../controllers';
import { verifyToken } from '../middlewares/jwt-verification'

console.log(sessionsController)

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.get('/hello', helloController.get),
router.post('/session', sessionsController.post )

export default router;
