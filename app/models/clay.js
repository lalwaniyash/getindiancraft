const mongoose = require('mongoose')
const Schema = mongoose.Schema

const claySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true }
})

module.exports = mongoose.model('Clay', claySchema)