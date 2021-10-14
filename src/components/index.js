import React from 'react'
import Carousel from './Home/Gallery'
import Style from './index.module.css'
import Navbar from './Nav/Navbar'
function index() {
    return (
        <div className={Style.container}>
            <Navbar/>
            <Carousel />
        </div>
    )
}

export default index
