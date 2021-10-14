import React from "react";
import Style from "./Searchbar.module.css";
import { search } from "react-icons-kit/icomoon/search";
import Icon from "react-icons-kit";
import Logo from '../../images/logoi.png'
import {cart} from 'react-icons-kit/icomoon/cart'

function Searchbar() {
  return (
    <div className={Style.containernav}>
        <img style={{width:"100px"}} src={Logo} alt="logo"/>
      <div className={Style.searchBar}>
        <input
          className={Style.input}
          placeholder={"¿QUÉ ESTAS BUSCANDO? ESCRÍBELO AQUÍ..."}
        ></input>
        <button>
          <Icon icon={search} />
        </button>
      </div>
      <span>
          MIS PEDIDOS
      </span>
      <div className={Style.ingresa}>
          <h6>HOLA ALIAD@</h6>
          <h5>INGRESA</h5>
      </div>
      <div className={Style.carrito}>
      <Icon icon={cart} size={40}/>
      <span>CARRITO</span>
    </div>
    </div>

  );
}

export default Searchbar;
