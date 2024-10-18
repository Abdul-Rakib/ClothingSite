import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for cart items inside the order
const CartItemSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  images: {
    type: [String] // Array of image URLs
  },
  isInCart: {
    type: Boolean,
    required: true
  }
});

// Define the schema for an order
const OrderSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  cartItems: [CartItemSchema], // Array of cart items
});

// Create the model
const Order = mongoose.model('Order', OrderSchema);

export default Order;
