import React, { useEffect, useState } from 'react';
import './articleandnews.scss';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');

    if (result.status === 200) setArticles(await result.json());
  };

  return (
    <section className="articleandnews">
      <div className="container">
        <div className="section-title">
          <p>Article & News</p>
          <div className="inside">
            <h2>Get Every Single Articles & News</h2>
            
            <Link to="/news" className="btn-transparent">
              Browse Articles
              <i className="fa-regular fa-arrow-up-right"></i>
            </Link>
          </div>
        </div>
        <div className="articles">
          {articles.slice(0, 3).map((article, index) => (
            <Link to={`/news/${article.id}`} className="article" key={article.id}>
              <div className="articleimg">
                <img src={article.imageUrl} alt={article.title} />
                <div className="date">
                  <h4>{new Date(article.published).getDate()}</h4>
                  <p>{new Date(article.published).toLocaleDateString('en-US', { month: 'short' })}</p>
                </div>
              </div>
              <div className="articletext">
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="dots">
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </div>
      </div>
    </section>
  );
};

export default Articles;
