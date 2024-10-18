import express from 'express';
import { addToCart, getCartItems } from '../controllers/cart.js';

const router = express.Router();

router.post('/addtocart',addToCart );
router.get('/getcart/:userId',getCartItems );

export default router;
