import React, { useState } from 'react'
import Cards from './Cards'
import Style from "./Vitrina.module.css";
import Silla1 from "../../images/sillas/silla01.png"
import Silla2 from "../../images/sillas/silla02.png"
import Silla3 from "../../images/sillas/silla03.png"
import Silla4 from "../../images/sillas/silla04.png"
import Cam1 from "../../images/camillas/cam1.png"
import Cam2 from "../../images/camillas/cam2.png"
import Cam3 from "../../images/camillas/cam3.png"
import Cam4 from "../../images/camillas/cam4.png"


const test = "chaoo"
function Vitrina() {
    const dataImport = {
        sillas:{
            title: "SILLAS DE RUEDAS",
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
        },
        camillas:{
            title: "TRATAMIENTO EN CASA",
            images: {
                "i01": Cam1,
                "i02": Cam2, 
                "i04": Cam3, 
                "i03": Cam4, 
            },
            texts:{
                "t01": "Sint do commodo culpa eu sit pariatur non.",
                "t02": "Sint do commodo culpa eu sit pariatur non.",
                "t03": "Sint do commodo culpa eu sit pariatur non.",
                "t04": "Sint do commodo culpa eu sit pariatur non.",
            }
        }
    }
    const [category, setCategory]= useState()

    const handleOnClick = ((value)=>{
        setCategory(value)
    })

    let dataToCard 
    if (category === "casa"){
        dataToCard = dataImport.camillas
    } else {
        dataToCard = dataImport.sillas

    }

    return (
        <div>
            <div className={Style.buttons}>
                <button className={category!== "sillas"?Style.button:Style.buttonactive} onClick={()=>(handleOnClick("sillas"))}>SILLAS DE RUEDAS</button>
                <button className={category!== "casa"?Style.button:Style.buttonactive} onClick={()=>(handleOnClick("casa"))}>TRATAMIENTO EN CASA</button>



            </div>
            <Cards data={dataToCard}/>
        </div>
    )
}

export default Vitrina
