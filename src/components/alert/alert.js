import React from 'react';
import Alert from '@material-ui/lab/Alert';
import style from './alert.module.scss';

export default function SimpleAlerts({ text }) {
  return (
    <div className={style.alert}>
      <Alert severity="error">{text}</Alert>
    </div>
  );
}