import React, { Fragment } from "react";
import Style from "./Cards.module.css";

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
   <p>Rama1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
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
