import React from "react";
import Card from "./Card";
import Style from "./Cards.module.css";

function Cards({ sectionTitle }) {
  return (
    <div className={Style.cardsppal}>
        <h2>{sectionTitle}</h2>
      <div className={Style.containercards}>
        <Card
          img={
            "https://www.farmalisto.com.co/140364/comprar-silla-de-ruedas-transporte-konfort-basic-por-unidad-precio-h01sp06953.jpg"
          }
          price={"250.000"}
          text={
            "Anim ut ex culpa adipisicing mollit anim adipisicing fugiat incididunt deserunt qui pariatur minim aliquip."
          }
        />
        <Card
          img={
            "https://www.farmalisto.com.co/140364/comprar-silla-de-ruedas-transporte-konfort-basic-por-unidad-precio-h01sp06953.jpg"
          }
          price={"250.000"}
          text={
            "Anim ut ex culpa adipisicing mollit anim adipisicing fugiat incididunt deserunt qui pariatur minim aliquip."
          }
        />
        <Card
          img={
            "https://www.farmalisto.com.co/140364/comprar-silla-de-ruedas-transporte-konfort-basic-por-unidad-precio-h01sp06953.jpg"
          }
          price={"250.000"}
          text={
            "Anim ut ex culpa adipisicing mollit anim adipisicing fugiat incididunt deserunt qui pariatur minim aliquip."
          }
        />
        <Card
          img={
            "https://www.farmalisto.com.co/140364/comprar-silla-de-ruedas-transporte-konfort-basic-por-unidad-precio-h01sp06953.jpg"
          }
          price={"250.000"}
          text={
            "Anim ut ex culpa adipisicing mollit anim adipisicing fugiat incididunt deserunt qui pariatur minim aliquip."
          }
        />
      </div>
    </div>
  );
}

export default Cards;
