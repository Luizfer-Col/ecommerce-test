import React from 'react'
import D1 from '../../images/dual/d1.jpeg'
import D2 from '../../images/dual/d2.jpeg'
import Style from './Dual.module.css'
function Dual() {
    return (
        <div className={Style.container}>
            <img src={D1}></img>
            <img src={D2}></img>
        </div>
    )
}

export default Dual
