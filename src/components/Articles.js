import React, { useEffect, useState } from 'react';
import './articleandnews.scss';

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect (() => {
        getArticles()
    }, [])


    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')

        if (result.status === 200)
        setArticles(await result.json())
    }

  return (
    <div className='container'>
        <div className="section-title">
            <p>Article & News</p>
                <div className="inside">
                    <h2>Get Every Single Articles & News</h2>
                    <button className="btn-transparent">Browse Atricles<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
        </div>
        <div className="articles">
            {articles.slice(0, 3).map((article, index) => (
            <a href="#" className="article" key={index}>
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
            </a>
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

      );
    };

export default Articles