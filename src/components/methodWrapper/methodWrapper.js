import React, {useState} from 'react';
import style from './methodWrapper.module.scss'
import Input from "../input/input";
import {connect, useDispatch} from "react-redux";
import {getGame, getMethod, getURL, hideAlert, hideLoader, showAlert, showLoader} from "../../redux/action";
import SimpleAlerts from "../alert/alert";
import ResultWrapper from "../resultWrapper/resultWrapper";
import Loader from "../loader/loader";

// import StartBlock from "../startBlock/startBlock";

function MethodWrapper(props) {
  const [startBlockIs, startBlock] = useState(true);

  function submitHandler(event) {
    event.preventDefault()
    if (!props.idGame) {
      props.hideLoader()
      props.showAlert("Вы не ввели ID игры")
    } else if (props.idGame.length !== 10) {
      props.showAlert("ID игры должно состоять из 10 цифр")
    } else if (!Number(props.idGame)) {
      props.showAlert("ID игры должно быть числом")
    } else {
      props.hideAlert()
      props.showLoader()
      props.getGame(Number(props.idGame))
    }
  }

  console.log(1)
  return (
    <form onSubmit={submitHandler} >
      <Input />
      {props.alert && <SimpleAlerts text={props.alert}/>}
      {props.load && <Loader />}
      {(!props.alert && props.data && !props.load) && <ResultWrapper />}
    </form>
  )
}

const mapDispatchToProps = {
  showAlert, getURL, getMethod, hideAlert, getGame, showLoader, hideLoader
}

const mapStateToProps = state => ({
  alert: state.alert,
  idGame: state.idGame,
  method: state.method,
  data: state.data,
  load: state.load
})

export default connect(mapStateToProps, mapDispatchToProps)(MethodWrapper)