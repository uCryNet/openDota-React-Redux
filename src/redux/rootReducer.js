import {HIDE_ALERT, SHOW_ALERT, REQUES_METHOD, GET_URL, FETCHED_DATA, SHOW_LOADER, HIDE_LOADER} from "./type";
import App from "../components/app/App";

const initialState = {
  alert : null,
  idGame : undefined,
  method : null,
  data : null,
  loader : null
}

export const rootReducer = ( state = initialState, action) => {
  switch (action.type) {
    case REQUES_METHOD :
      return {...state, method : action.payload}
    case GET_URL:
      return {...state, idGame : action.payload}
    case SHOW_ALERT:
      return {...state, alert : action.payload}
    case HIDE_ALERT:
      return {...state, alert : null}
    case FETCHED_DATA:
      return {...state, data : action.payload}
    case SHOW_LOADER:
      return {...state, load : true}
    case HIDE_LOADER:
      return {...state, load : null}

    default : return state
  }
}

export default rootReducer;