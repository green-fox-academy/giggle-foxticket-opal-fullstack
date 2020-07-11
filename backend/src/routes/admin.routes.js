import express from 'express';
import { adminController } from '../controllers/adminController'

const router = express.Router();

router.get('/', adminController );

export default router;
