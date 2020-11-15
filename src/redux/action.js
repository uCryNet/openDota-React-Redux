import {HIDE_ALERT, REQUES_METHOD, SHOW_ALERT, GET_URL, FETCHED_DATA, SHOW_LOADER, HIDE_LOADER} from "./type";

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function getURL(url) {
  return {
    type: GET_URL,
    payload: url
  }
}

export function getMethod(method) {
  return {
    type: REQUES_METHOD,
    payload: method
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function getGame(idGame) {
  return async dispatch => {
    const url = `https://api.opendota.com/api/matches/${idGame}`;
    try {
      const response = await fetch(url);
      const json = await response.json();

      if (json["error"]) {
        dispatch({ type: SHOW_ALERT, payload: "Матч не найдено" })
      } else {
        dispatch({ type: FETCHED_DATA, payload: json })
        // console.log(json)
      }
    } catch (error) {
      dispatch({ type: SHOW_ALERT, payload: "Ошибка сети. Попробуйте попозже" })
    }
    dispatch(hideLoader())
  }
}