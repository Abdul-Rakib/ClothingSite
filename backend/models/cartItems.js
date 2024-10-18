import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  size: {
    type: String, 
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [String],
  isInCart: {
    type: Boolean,
    required: true,
  },
});

const CartItems = mongoose.model('CartItems', cartSchema);
export default CartItems;
