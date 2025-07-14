
const express = require('express');
const axios = require('axios');
const router = express.Router();
const Article = require('../models/Article');

router.get('/fetch', async (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
  try {
    const response = await axios.get(url);
    const articles = response.data.articles;

    await Article.deleteMany({});
    await Article.insertMany(articles);
    res.json({ message: 'Articles fetched and saved.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const articles = await Article.find().sort({ publishedAt: -1 });
  res.json(articles);
});

module.exports = router;
