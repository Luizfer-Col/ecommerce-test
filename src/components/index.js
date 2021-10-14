import React from 'react'
import Carousel from './Home/Gallery'
import Style from './index.module.css'
import Navbar from './Nav/Navbar'
import Cards from './Vitrina/Cards'
function index() {
    return (
        <div className={Style.container}>
            <Navbar/>
            <Carousel />
            <Cards sectionTitle={"Nueva Coleccion"}/>
        </div>
    )
}

export default index
