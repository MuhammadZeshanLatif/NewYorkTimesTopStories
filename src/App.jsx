import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsCard = ({ newsItem }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={newsItem.multimedia[0]?.url}
        alt={newsItem.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{newsItem.title}</div>
        <p className="text-gray-700 text-base">{newsItem.abstract}</p>
      </div>
      <div className="px-6 py-4">
        <a
          className="text-blue-500 hover:underline"
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

const NewsPage = () => {
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

export default NewsPage;