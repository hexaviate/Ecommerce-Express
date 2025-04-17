import mongoose from 'mongoose';


// membuat Schema Product di MongoDB
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true 
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true
});

//membuat model/Collection Product dengan mengambil data dari productSchema
const Product = mongoose.model('Product', productSchema);

export default Product;