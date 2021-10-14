import React from 'react'
import Caroussel from './Home/Caroussel'
import Style from './index.module.css'
import Navbar from './Nav/Navbar'
function index() {
    return (
        <div className={Style.container}>
            <Navbar/>
            {/* <Caroussel /> */}
        </div>
    )
}

export default index
