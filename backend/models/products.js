import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    images: { 
        type: [String], 
        required: true 
    },
    variants: { 
        type: Number, 
        default: null 
    },
    description: { 
        type: String, 
        required: true 
    },
    sizes: { 
        type: [String], 
        required: true 
    }, 
    colors: { 
        type: [String], 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    }, 
    stock: { 
        type: Number, 
        required: true 
    }, 
    category: { 
        type: String, 
        required: true 
    },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
