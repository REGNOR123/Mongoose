const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({      // Schema created
    name : String,
    brand: String,
    price: Number,
});

module.exports = new mongoose.model("products", productSchema); // Model created