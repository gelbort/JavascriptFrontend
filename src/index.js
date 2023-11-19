import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import OurNewsAndArticles from './components/OurNewsAndArticles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/News' element={<News />} />
        <Route path='/' element={<OurNewsAndArticles />} />
        <Route path='/News/:id' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
