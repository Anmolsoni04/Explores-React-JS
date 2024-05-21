import React from 'react'
import "./Card.css"

const Card = (props) => {
  return ( 
      <div className="title">
        <p>{props.p}</p>      
      </div>
    )
}

export default Card
