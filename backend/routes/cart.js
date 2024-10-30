import express from 'express';
import { addToCart, getCartItems, updateCartItems } from '../controllers/cart.js';

const router = express.Router();

router.post('/addtocart',addToCart );
router.get('/getcart/:userId',getCartItems );
router.post('/updatecart',updateCartItems );

export default router;
