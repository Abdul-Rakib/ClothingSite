import Order from "../models/orders.js"


    const generateOrderId = () => {
        return `ORD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    };

export const createOrder = async (req, res) => {
    try {
        const { userId, userEmail, orderedItems, subtotal, discountCode, discountedAmount, totalPrice, shippingAddress, paymentMethod, paymentStatus, orderStatus } = req.body;
        console.log(req.body);
        
        const orderData = { 
            orderId: generateOrderId(),
            userId,
            userEmail,
            orderedItems,
            subtotal,
            discountCode,
            discountedAmount,
            totalPrice,
            shippingAddress,
            paymentMethod,
            paymentStatus,
            orderStatus,
        };

        const newOrder = new Order(orderData);
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully.', newOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOrders = async (req, res)=>{
    try{
        const {userId} = req.params
        console.log(userId);

        const Orders = await Order.find({userId})
        
        if(Orders.length >0){
            res.status(200).json({message: 'Order data fetched successfully.', Orders})
        }else{
            res.status(404).json({message: 'No orders found.'})
        }
        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}