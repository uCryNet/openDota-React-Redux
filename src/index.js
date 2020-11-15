import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
