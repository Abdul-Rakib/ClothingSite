import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import Product from './models/products.js';
import { products } from './data/index.js';
import productsRoutes from './routes/product.js';
import authRoutes from './routes/auth.js';

dotenv.config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON

// Use product routes
app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Connected to MongoDB');

    // Insert products into the database
    try {
        await Product.insertMany(products); // Use 'await' inside an async function
        console.log('Data imported');
    } catch (error) {
        console.error('Error inserting data:', error.message);
    }

}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});