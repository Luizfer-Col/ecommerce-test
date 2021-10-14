import React from 'react'
import Icon from 'react-icons-kit'
// import {u267F} from 'react-icons-kit/noto_emoji_regular/u267F'
import {ic_accessible_twotone} from 'react-icons-kit/md/ic_accessible_twotone'
import {ic_masks_twotone} from 'react-icons-kit/md/ic_masks_twotone'
import {medkit} from 'react-icons-kit/fa/medkit'
import {u1F3E8} from 'react-icons-kit/noto_emoji_regular/u1F3E8'
import Style from "./Navbar.module.css";
import Searchbar from './Searchbar'


const optionsNavbar = [
    {
        title: "MOVILIDAD",
        icon: ic_accessible_twotone
    },
    {
        title: "CUIDADO EN EL HOGAR",
        icon: medkit
    },
    {
        title: "PROFESIONALES DE LA SALUD",
        icon: u1F3E8
    },
    {
        title: "TAPABOCAS Y DESINFECCIÓN",
        icon: ic_masks_twotone
    },
]

function Navbar() {
    return (
        <nav className={Style.navcontainer}>
            <Searchbar />
            <ul className={Style.navbar}>
            {optionsNavbar.map(option=>{
                return  <li className={Style.lista}><Icon icon={option.icon} size={30}/> <a className={Style.aoptions}>{option.title}</a></li>
            })}


            </ul>
        </nav>
    )
}

export default Navbar
