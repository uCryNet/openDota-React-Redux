import React, {useState} from 'react';
import style from './startBlock.module.scss';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";

export default function StartBlock() {
  // const [startBlockIs, startBlock] = useState(true);

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