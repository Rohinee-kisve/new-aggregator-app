
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './components/NewsCard';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>News Aggregator</h1>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default App;
