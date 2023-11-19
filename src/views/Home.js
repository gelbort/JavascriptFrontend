import React from 'react'
import '../index.css'

import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'
import Brands from '../components/Brands'
import Showcase from '../components/Showcase'
import ProjectAndCase from '../components/ProjectAndCase'
import MeetOurTeam from '../components/MeetOurTeam'
import Articles from '../components/Articles'
import WhyUs from '../components/WhyUs'
import Testimonial from '../components/Testimonial'
import Features from '../components/Features'


const Home = () => {
  return (
    <div>
        <Header />
        <Showcase />
        <Brands />
        <Features />
        <WhyUs />
        <ProjectAndCase />
        <MeetOurTeam />
        <Testimonial />
        <OurServices />
        <Articles />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Homeg