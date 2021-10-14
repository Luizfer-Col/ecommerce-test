import React from "react";
import Style from "./Searchbar.module.css";
import { search } from "react-icons-kit/icomoon/search";
import Icon from "react-icons-kit";
import Logo from '../../images/logo.png'

function Searchbar() {
  return (
    <div>
        <span className={Style.titleppal}>
						{<img src={Logo} alt="logo" />}
						
					</span>
      <div className={Style.searchBar}>
        <input
          className={Style.input}
          placeholder={"¿QUÉ ESTAS BUSCANDO? ESCRÍBELO AQUÍ..."}
        ></input>
        <button>
          <Icon icon={search} />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
