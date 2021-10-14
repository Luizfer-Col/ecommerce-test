import React, { Fragment } from "react";
import Style from "./Cards.module.css";
// import Silla1 from "../../images/sillas/silla01.png"
// import Silla2 from "../../images/sillas/silla02.png"
// import Silla3 from "../../images/sillas/silla03.png"
// import Silla4 from "../../images/sillas/silla04.png"

function Cards({ data}) {
    const {title, images, texts} = data
    console.log(images);
  return (
      <Fragment>
  
        <div className={Style.title}>

            <h1>{title}</h1>


      </div>

    <div className={Style.container}>
       
    <div className={Style.card}>
        <img src={images["i01"]} />
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
        <button className={Style.add}>Añadir al carrito</button>
    </div>
    
    <div className={Style.card}>
        <img src={images["i02"]} />
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
   <button className={Style.add}>Añadir al carrito</button>
    </div>
    
    <div className={Style.card}>
        <img src={images["i03"]} />
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
     <button className={Style.add}>Añadir al carrito</button>
    </div>
    
    <div className={Style.card}>
        <img src={images["i04"]} />
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
       <button className={Style.add}>Añadir al carrito</button>
    </div>
    

</div>

</Fragment>

  );
}

export default Cards;
