import express from 'express';
import { createOrder, getOrders } from '../controllers/orders.js';


const router = express.Router();

router.post('/createorder', createOrder);
router.get('/getorders/:userId', getOrders)

export default router;