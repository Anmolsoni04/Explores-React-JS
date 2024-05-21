import React from 'react'
import "./Card.css"

const Card = (props) => {
  return ( 
      <div className="title">
        <p>{props.p}</p> 
        <img src="https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg" alt="" />     
      </div>
    )
}

export default Card
