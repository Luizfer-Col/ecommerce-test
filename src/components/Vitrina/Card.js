import React from 'react'
import Style from './Card.module.css'


function Card({img, price, text}) {
    return (
        <div className={Style.card}>
            <img src={img}/>
            <h5>{text}</h5>
            <h4>{price}</h4>
            
        </div>
    )
}

export default Card
