import React from 'react'
import '../index.css'
import { Button } from '../components/Generics/Button'
import Header from '../components/Header'
import notfound from '../assets/images/notfound-image.gif'

const NotFound = () => {
  return (
    <>  
        <Header />
      <div className='notfound container'>
      <h1>404 Page Not Found</h1>
      <img className="notfound-image" src={notfound} alt="404 page not found" />
        {/* <Button type="yellow" title="Back Home" url="#" /> */}
      </div>
        
    </>
  )
}

export default NotFound