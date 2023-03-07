const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemeSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    Gov: { type: String, required: true }

})

module.exports = mongoose.model('Scheme', schemeSchema)