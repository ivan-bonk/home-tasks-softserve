const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    img: String,
    title: String,
    text: String
});

module.exports = mongoose.model('news', NewsSchema);