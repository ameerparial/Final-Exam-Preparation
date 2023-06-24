const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ProductSchema = new Schema({
    name: String,
    price: Number,
    qty: Number,
    description: String,
})
module.exports = mongoose.model('myproduct', ProductSchema)