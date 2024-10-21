import CartItems from '../models/cartItems.js';

export const addToCart = async (req, res) => {
  const { userId,email, id, quantity, color, size, name, price, category, description, images, isInCart } = req.body;

  try {
    let cartItem = await CartItems.findOne({ userId,email, id, color, size });
    console.log('Existing Cart Item:', cartItem); // Debugging line
    

    if (cartItem) {
      // If the item already exists, update the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.status(200).json({ message: 'Cart item updated', cartItem });
    } else {
      cartItem = new CartItems({
        id,
        userId,
        email,
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


export const getCartItems = async (req, res) => {
  const { userId } = req.params;
  console.log(req.params); // Debugging line
  
  
  try {

    const cartItems = await CartItems.find({ userId });
    // console.log('Cart Items:', cartItems); // Debugging line
    if(cartItems.length > 0){
      return res.status(200).json(cartItems);
    }else{
      return res.status(404).json({ message: 'No cart items found' });
    }
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
