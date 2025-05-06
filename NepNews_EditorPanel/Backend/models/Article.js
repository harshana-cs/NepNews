const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    description: String,
    coverImage: String,
    otherImages: [String],
    status: String,
    author: String,
    date: String,
    categories: [String]
});

module.exports = mongoose.model('Article', articleSchema, 'editor_articles');
