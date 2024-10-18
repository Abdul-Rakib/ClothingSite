import Order from "../models/orders.js"

export const createOrder = async (req, res) => {
    try {
        const { userId, userEmail, cartItems } = req.body;
        // console.log(req.body);
        
        const newOrder = new Order({ userId, userEmail, cartItems });
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully.', newOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};