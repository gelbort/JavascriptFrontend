import React from 'react'
import '../index.css'
import Footer from '../components/Footer'
import { Button } from '../components/Generics/Button'
import Header from '../components/Header'

const NotFound = () => {
  return (
    <>  
        <Header />
      <div className='notfound container d-flex'>
      <h1>404 Page Not Found</h1>
        {/* <Button type="yellow" title="Back Home" url="#" /> */}
      </div>
        
    </>
  )
}

export default NotFound