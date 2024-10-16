import express from 'express';
import { addToCart } from '../controllers/cart.js';

const router = express.Router();

router.post('/addtocart',addToCart );

export default router;
