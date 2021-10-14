import React, { Fragment } from "react";
import Style from "./Cards.module.css";
import Silla1 from "../../images/sillas/silla01.png"
import Silla2 from "../../images/sillas/silla02.png"
import Silla3 from "../../images/sillas/silla03.png"
import Silla4 from "../../images/sillas/silla04.png"

function Cards({ sectionTitle }) {
  return (
      <Fragment>
  
        <div className={Style.title}>

            <h1>{sectionTitle}</h1>


      </div>

    <div className={Style.container}>
       
    <div className={Style.card}>
        <img src={Silla1} />
        <h4>Naturaleza</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
        <a href="#">Leer más</a>
    </div>
    
    <div className={Style.card}>
        <img src={Silla2} />
        <h4>Naturaleza</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
        <a href="#">Leer más</a>
    </div>
    
    <div className={Style.card}>
        <img src={Silla3} />
        <h4>Naturaleza</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
        <a href="#">Leer más</a>
    </div>
    
    <div className={Style.card}>
        <img src={Silla4} />
        <h4>Naturaleza</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
        <a href="#">Leer más</a>
    </div>
    

</div>

</Fragment>

  );
}

export default Cards;
