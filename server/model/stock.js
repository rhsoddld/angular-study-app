const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
    coverImage: String,
    name: { type: String, required: true, max:[60,'max length'] },
    price: Number,
    descrition: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,

})

module.exports = mongoose.model('Stock', StockSchema)