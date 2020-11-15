import React from 'react';
import style from './startBlock.module.scss';
import {NavLink} from "react-router-dom";

export default function StartBlock() {
  return (
    <div className={style.startBlock}>
      <div className={style.inner}>
        <h1>
          OPENDOTA
        </h1>
        <h3>
          Информационная платформа Dota 2 с <br/>
          открытым исходным кодом
        </h3>


        <NavLink to="/request" className={style.button}>
          Запросить отдельный матч
        </NavLink>
      </div>
    </div>
  )
}