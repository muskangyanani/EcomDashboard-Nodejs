const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  pname: String,
  price: Number,
  category: String,
  userId: String,
  brand: String
})

module.exports = mongoose.model('products', productSchema);