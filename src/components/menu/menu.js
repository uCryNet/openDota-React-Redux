import React from 'react';
// import Link from "react-router-dom/modules/Link";
import {NavLink} from "react-router-dom";
import style from "./menu.module.scss"

export default function Menu() {
  return (
    <nav className={style.menu}>
      <NavLink exact to="/" activeClassName={style.activeLink}>Главная</NavLink>
      {/*<NavLink to="/request" activeClassName={style.activeLink}>Матч</NavLink>*/}
      <NavLink to="/about" activeClassName={style.activeLink}>О проекте</NavLink>
    </nav>
  )
}