import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './OurNewsAndArticles.scss';

const OurNewsAndArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');

    if (result.status === 200) setArticles(await result.json());
  };

  return (
    <div className='articleandnews'>
      <div className='container mt-5'>
        <h2>Our News & Articles</h2>
        <div className='articles'>
          {articles.map((article) => (
            <Link to={`/news/${article.id}`} className='article' key={article.id}>
              <div className='articleimg'>
                <img src={article.imageUrl} alt={article.title} />
                <div className='date'>
                  <h4>{new Date(article.published).getDate()}</h4>
                  <p>{new Date(article.published).toLocaleDateString('en-US', { month: 'short' })}</p>
                </div>
              </div>
              <div className='articletext'>
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className='dots'>
        <button type="button" className="btn btn-light btn-square-md" data-mdb-ripple-color="dark">&lt;</button>
          <button type="button" className="btn btn-light btn-square-md" data-mdb-ripple-color="dark"> 1 </button>
          <button type="button" className="btn btn-light btn-square-md" data-mdb-ripple-color="dark"> 2 </button>
          <button type="button" className="btn btn-light btn-square-md" data-mdb-ripple-color="dark"> 3 </button>
          <button type="button" className="btn btn-light btn-square-md" data-mdb-ripple-color="dark">...</button>
          <button type="button" className="btn btn-light btn-square-md" data-mdb-ripple-color="dark"> 9 </button>
          <button type="button" className="btn btn-light btn-square-md" data-mdb-ripple-color="dark">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default OurNewsAndArticles;
