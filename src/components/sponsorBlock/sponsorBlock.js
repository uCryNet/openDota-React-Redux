import React from 'react';
import vpLogo from "../../img/vp-logo.png";
import openaiLogo from "../../img/openai-logo.png";
import style from './sponsorBlock.module.scss';

export default function sponsorBlock() {
  return (
    <div className={style.sponsorBlock}>
      <h2>
        ПРИ ПОДДЕРЖКЕ
      </h2>
      <div className={style.inner}>
        <a href="https://www.vpgame.com/" target="_blank" rel="noopener noreferrer">
          <img srcSet={vpLogo} alt="vp-logo.png"/>
        </a>
        <a href="https://www.openai.com/" target="_blank" rel="noopener noreferrer">
          <img srcSet={openaiLogo} alt="openai-logo.png"/>
        </a>
        <p>
          <a href="https://www.opendota.com/" target="_blank" rel="noopener noreferrer">
            &lt;OPENDOTA /&gt;
          </a>
        </p>
      </div>
      <p className={style.sponsorImage}>
        Фоновый рисунок предоставлен&nbsp;
        <a href="//www.artstation.com/artist/mikeazevedo" target="_blank" rel="noopener noreferrer">
          Mike Azevedo
        </a>
      </p>
    </div>
  )
}