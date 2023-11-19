import React from 'react'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Articles from '../components/Articles'
import OurNewsAndArticles from '../components/OurNewsAndArticles'
import NewsHeader from '../components/NewsHeader'

const News = () => {
  return (
    <div>
        <Header />
        <NewsHeader />
        <OurNewsAndArticles />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default News