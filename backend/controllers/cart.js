import CartItems from '../models/cartItems.js';

export const addToCart = async (req, res) => {
  const { userId, id, quantity, color, size, name, price, category, description, images, isInCart } = req.body;

  try {
    let cartItem = await CartItems.findOne({ userId, id, color, size });

    if (cartItem) {
      // If the item already exists, update the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.status(200).json({ message: 'Cart item updated', cartItem });
    } else {
      cartItem = new CartItems({
        id,
        userId:1,
        name,
        price,
        quantity,
        color,
        size,
        category,
        description,
        images,
        isInCart,
      });

      await cartItem.save();
      return res.status(201).json({ message: 'Item added to cart', cartItem });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
