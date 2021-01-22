const mongoose = require('mongoose');

const FansSchema = new mongoose.Schema({
    userName: String,
    post: String,
    time: String
});

module.exports = mongoose.model('fans', FansSchema);