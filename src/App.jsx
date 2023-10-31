import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsCard } from './assets/Components/cards';

const App = () => {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    try {
      const res = await axios.get(
        'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kuuZy2gdWl6vOavIi0oWGAxEsTC4LZIS'
      );
      setNews(res.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="flex flex-wrap">
      {news.map((newsItem, index) => (
        <NewsCard key={index} newsItem={newsItem} />
      ))}
    </div>
  );
}

export default App;