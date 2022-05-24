import React from 'react'
import Carousel from './Home/Gallery'
import Style from './index.module.css'
import Navbar from './Nav/Navbar'
import Cards from './Vitrina/Cards'
import Vitrina from './Vitrina/Vitrina'
import Silla1 from "./../images/sillas/silla01.png"
import Silla2 from "./../images/sillas/silla02.png"
import Silla3 from "./../images/sillas/silla03.png"
import Silla4 from "./../images/sillas/silla04.png"
import Dual from './Home/Dual'

const dataToCard = {
    title: "NUEVA COLECCIÓN Dev",
    images: {
        "i01": Silla1,
        "i02": Silla2, 
        "i04": Silla3, 
        "i03": Silla4, 
    },
    texts:{
        "t01": "Sint do commodo culpa eu sit pariatur non.",
        "t02": "Sint do commodo culpa eu sit pariatur non.",
        "t03": "Sint do commodo culpa eu sit pariatur non.",
        "t04": "Sint do commodo culpa eu sit pariatur non.",
    }
}

function index() {
    return (
        <div className={Style.container}>
            <Navbar/>
            <Carousel />
            <Cards data={dataToCard}/>
            <Dual />
            <Vitrina />
        </div>
    )
}

export default index
