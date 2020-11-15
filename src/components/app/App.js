import React from 'react';
import './App.module.scss';
import MethodWrapper from "../methodWrapper/methodWrapper";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Menu from "../menu/menu";
import About from "../../pages/about/about";
import Home from "../../pages/home/home";
import Footer from "../footer/footer";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Menu/>
        <Switch>
          <Route path="/" exact children={<Home/>}/>
          <Route path="/request" children={<MethodWrapper/>}/>
          <Route path="/about" children={<About/>}/>
          <Redirect to="/"/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}

