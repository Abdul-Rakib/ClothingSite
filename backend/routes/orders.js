import express from 'express';
import { createOrder } from '../controllers/orders.js';

const router = express.Router();

router.post('/createorder', createOrder);

export default router;