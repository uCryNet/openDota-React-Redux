import React from 'react';
import {getURL} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import InputUI from '@material-ui/core/Input';
import style from './input.module.scss';

export default function Input() {
  const dispatch = useDispatch()

  return (
    <div className={style.wrapper}>
      <InputUI
        className={style.input}
        placeholder="Введите ID матча"
        name="idGame"
        id="idGame"
        onKeyUp={(event) => dispatch(getURL(event.currentTarget.value))}
      />
      <Button type="submit" className={style.button} variant="contained" color="primary">
        СТАРТ!
      </Button>
    </div>
  )
}

