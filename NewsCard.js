
import React from 'react';

const NewsCard = ({ article }) => (
  <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
    <h3>{article.title}</h3>
    <img src={article.urlToImage} alt={article.title} style={{ width: "100%" }} />
    <p>{article.description}</p>
    <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
  </div>
);

export default NewsCard;
