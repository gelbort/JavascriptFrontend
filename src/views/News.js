import React from 'react'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Articles from '../components/Articles'
import OurNewsAndArticles from '../components/OurNewsAndArticles'
import ContactsHeader from '../components/ContactsHeader'

const News = () => {
  return (
    <div>
        <Header />
        <ContactsHeader />
        <OurNewsAndArticles />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default News