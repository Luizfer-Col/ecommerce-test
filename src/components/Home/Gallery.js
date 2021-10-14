import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from '../../images/logoi.png'
import Logoz from '../../images/logo.png'
import i01 from '../../images/01.jpg'
import i02 from '../../images/02.jpg'
import i03 from '../../images/03.jpg'
import i04 from '../../images/04.jpg'
import i05 from '../../images/05.jpg'
import i06 from '../../images/06.jpg'
import i07 from '../../images/07.jpg'
import i08 from '../../images/08.jpg'

function Gallery() {
    const [imagePpal, setImagePpal]=useState(i01)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 464 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 2000, min: 1400 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1400, min: 1200 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div style={{minWidth:"1000px", maxWidth:"1800px"}}>
        <div style={{minWidth:"1400px", maxHeight:"600px"}}>
        <button>hola</button>
        <p>Anim nulla aliquip veniam culpa amet qui voluptate deserunt labore non eiusmod occaecat laboris. Ea voluptate et ad eiusmod magna in consequat velit aliqua. Enim eu ad aute laboris commodo mollit sunt sunt nulla consectetur. Eu laboris enim labore incididunt.</p>

            <img src={imagePpal} style={{width:"100%",
        height: "500px",  objectFit:"cover"}}/>

        </div>

<Carousel 
responsive={responsive}
>

  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i01))} >
      <img src={i01} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 01</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i02))} >
      <img src={i02} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 02</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i03))} >
      <img src={i03} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 03</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i04))} >
      <img src={i04} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 04</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i05))} >
      <img src={i05} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 05</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i06))} >
      <img src={i06} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 06</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i07))} >
      <img src={i07} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 07</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(i08))} >
      <img src={i08} style={{width:"280px", height:"200px"}}/>
        <h4>Imagen 08</h4>
      </a>
  </div>


</Carousel>
        </div>

    )
}

export default Gallery
