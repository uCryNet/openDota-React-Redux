import React from 'react';
import style from "./footer.module.scss"
import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <p>
          <NavLink exact to="/">&lt;OPENDOTA /&gt;</NavLink>
        </p>
        <p className={style.steam}>
          <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">
            Информационная платформа Dota 2 с открытым исходным кодом - работает на платформе Steam
          </a>
        </p>
      </div>
    </footer>
  )
}