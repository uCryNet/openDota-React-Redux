import React from 'react';
import style from './about.module.scss'

export default function About() {
  return (
    <div className={style.wrapper}>
      <p>
        В данном пет-проекте вы можете найти основные данные о матче в игре Dota 2.
      </p>
      <p>
        Введите в строку поиска на главной ID матча, например: 5671556709, 5671548816, 5671568126 или 5671526760.
      </p>
      <p>
        Я не особо парился над стилями и не ставил себе за цель скопировать полностью функционал <b><a href="https://www.opendota.com/" target="_blank" rel="noopener noreferrer">opendota.com</a></b>.
      </p>
<div className={style.contactWrapper}>
  <h2>
    Связь:
  </h2>
  <p><b>Почта: </b><a href="mailto:ucrynet@gmail.com">ucrynet@gmail.com</a></p>
  <p><b>GitHub: </b><a href="https://github.com/uCryNet" target="_blank" rel="noopener noreferrer">ucrynet</a></p>
</div>
    </div>
  )
}