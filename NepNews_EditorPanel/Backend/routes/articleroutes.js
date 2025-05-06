const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET all articles
router.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find(); // Fetches from editor_articles collection
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching articles' });
    }
});


module.exports = router;