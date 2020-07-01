import express from 'express';
import { getSystemStatus } from '../controllers/heartbeatController';

const router = express.Router();

router.get('/heartbeat', getSystemStatus);

export default router;
