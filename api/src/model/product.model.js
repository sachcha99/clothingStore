const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },    
    status: { type: String, required: true },

},{
    timestamps:true
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;