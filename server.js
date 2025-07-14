
require('./.env').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const newsRoutes = require('./routes/news');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'));

app.use('/api/news', newsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
