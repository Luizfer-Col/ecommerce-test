import React, { useEffect, useState } from 'react'
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

const data = {
    "01":{
        img: i01,
        textThumbnail: "Anim incididunt" ,
        textGallery: "Anim do duis incididunt ex sunt ex sint laboris eu officia ."
    },
    "02":{
        img: i02,
        textThumbnail: "Anim veniam" ,
        textGallery: "Anim veniam excepteur incididunt aliquip ad ex."
    },
    "03":{
        img: i03,
        textThumbnail: "Elit commodo" ,
        textGallery: "Elit commodo minim officia laboris ex voluptate."
    },
    "04":{
        img: i04,
        textThumbnail: "Ad laborum" ,
        textGallery: "Ad laborum qui ex fugiat deserunt dolore amet mollit ex."
    },
    "05":{
        img: i05,
        textThumbnail: "Fugiat nulla" ,
        textGallery: "Fugiat nulla consequat officia cupidatat sunt laboris velit ut."
    },
    "06":{
        img: i06,
        textThumbnail: "Est eiusmod" ,
        textGallery: "Est eiusmod qui Lorem Lorem et consequat officia."
    },
    "07":{
        img: i07,
        textThumbnail: "Proident" ,
        textGallery: "Proident magna quis sint officia id quis exercitation."
    },
    "08":{
        img: i08,
        textThumbnail: "Aullamco" ,
        textGallery: "Id enim non nisi do aliqua ea aute eu ullamco ea amet."
    },
}





function Gallery() {
    const [imagePpal, setImagePpal]=useState(
        {"img": "", "textThumbnail": "", "textGallery": "",})

        useEffect(() => {
            setImagePpal(data["01"])
        }, [])


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 2000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 2000, min: 1700 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1450, min: 1200 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div style={{maxWidth:"100%"}}>
        <div style={{ maxHeight:"600px", marginBottom:"15px"}}>
        <button style={{position:"absolute", marginLeft:"280px",width:"auto", marginTop:"300px"}}>Ver Productos</button>
        <h1 style={{background:"none", fontSize:"30px", position:"absolute", margin:"200px 30px 30px", width:"600px", color:"white"}}>{imagePpal.textGallery}</h1>

            <img src={imagePpal.img} style={{width:"100%",
        height: "500px",  objectFit:"cover"}}/>

        </div>

<Carousel 
responsive={responsive}
// arrows={true}
showDots={true}
// arrows={false}
// focusOnSelect={true}
// centerMode={true}
>


  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["01"]))} >
      <img src={data["01"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["01"].textThumbnail}</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["02"]))} >
      <img src={data["02"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["02"].textThumbnail}</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["03"]))} >
      <img src={data["03"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["03"].textThumbnail}</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["04"]))} >
      <img src={data["04"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["04"].textThumbnail}</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["05"]))} >
      <img src={data["05"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["05"].textThumbnail}</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["06"]))} >
      <img src={data["06"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["06"].textThumbnail}</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["07"]))} >
      <img src={data["07"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["07"].textThumbnail}</h4>
      </a>
  </div>
  <div style={{cursor:"pointer"}}>
      <a onClick={(()=>setImagePpal(data["08"]))} >
      <img src={data["08"].img} style={{width:"280px", height:"200px"}}/>
        <h4>{data["08"].textThumbnail}</h4>
      </a>
  </div>
</Carousel>
        </div>

    )
}

export default Gallery
