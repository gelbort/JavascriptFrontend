import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <article>
    <div className="short-border"></div>
    <h4>{title}</h4>
    <p>{description}</p>
    <a className="btn-round" href={url}><i className="fa-regular fa-arrow-right"></i></a>
  </article>
  )
}

export default ServiceBox