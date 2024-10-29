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
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  cartItems: [CartItemSchema], // Array of cart items
  discountCode: {
    type: String,
  },
  discountedAmount: {
    type: Number,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    required: true
  },
  orderStatus: {
    type: String,
    required: true,
    trackingId: {
      type: String
    },
  },
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

export default Order;
