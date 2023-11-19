import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/newsdetails.css';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Header from '../components/Header';


const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        if (result.status === 200) {
          const articleData = await result.json();
          setArticle(articleData);
        } else {
          console.error('Failed to fetch article');
        }
      } catch (error) {
        console.error('Error fetching article', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div className='container mt-5'>
        <div className='NewsTop'>
          <div>
            <h1>{article.title}</h1>
          </div>
          <div className='d-flex'>
            <p>
              {new Date(article.published).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <p>{article.author}</p>
          </div>
        </div>
        <div className='article'>
          <img className='article-image' src={article.imageUrl} alt={article.title} />
          <p>{article.content}</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#f0efea' }}>
        <Articles />
      </div>
      <Footer />
    </>
  )
}

export default NewsDetails