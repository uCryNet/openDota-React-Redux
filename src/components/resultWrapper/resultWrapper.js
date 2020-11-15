import React from 'react';
import style from './resultWrapper.module.scss';
import {useSelector} from "react-redux";

export default function ResultWrapper() {
  let newData = {};
  const data = useSelector(state => state.data)
  const toArray = Object.entries(data)
  toArray.filter(element => {
    if (element[0] === "match_id") newData["match_id"] = element[1]
    if (element[0] === "radiant_win") newData["radiant_win"] = element[1]
    if (element[0] === "radiant_win") {
      if (element[1]) {
        newData["win"] = `Победа сил Света`
        newData["win_img"] = `<svg class="sc-jzJRlG ljWLiI" viewBox="0 0 300 300"><ellipse cx="148.6" cy="65.5" rx="35" ry="64.4"></ellipse><path d="M299.3,212.1c0,0-27.5-6.1-27.5-21.5c-0.5-15.4,8.9-22.4,8.9-22.4s-0.9-1.9-0.5-4.2c0.5-2.3,7.9-2.3,7.9-2.3 s-0.9-2.3-0.5-4.7c0-1.9,3.3-4.2,3.3-4.2s-4.2-0.5-5.1-1.9c-1.4-1.4-1.4-3.7-1.4-3.7s-30.3,4.2-28.5-9.8s21.5-13.1,21.5-13.1 l-0.9-7.5c0,0-9.3-0.5-11.7-2.8c-0.9-0.9-8.9-22.9-18.7-40.1c-11.2-19.6-23.8-34.5-23.8-34.5l-9.3,2.8l1.4,19.1 c0,0,13.1,3.3,16.3,13.5c4.7,14.9-8.9,61.6-25.7,67.7c-14,5.1-29.9,0.9-29.9,0.9l-0.5,9.3l16.8,14l-13.5,6.5l-4.2-7l-5.1,8.4h-6.1 l-4.7,5.6l-7.9,0.9l-7.9-1.4l-4.7-5.6h-6.1l-5.6-8.4l-3.7,7.5l-12.6-6.1l16.8-14l-0.5-9.3c0,0-15.9,4.7-29.9-0.9 c-16.8-6.1-30.3-52.7-25.7-67.7c3.3-10.3,16.3-13.5,16.3-13.5l0.9-18.7l-9.3-2.8c0,0-12.6,14.9-23.8,34.5 c-9.8,16.8-17.7,38.7-18.7,40.1c-2.3,1.9-11.7,2.8-11.7,2.8l-0.9,7.5c0,0,19.6-0.5,21.5,13.1c1.9,14-28.5,9.8-28.5,9.8 s0,0.9-1.4,2.8c-1.4,1.4-5.1,1.9-5.1,1.9s3.3,1.9,3.3,4.2c0,1.9-0.5,4.7-0.5,4.7s7.5,0,7.9,2.3c0.5,2.3-0.5,4.2-0.5,4.2 s8.9,7,8.9,22.4c-0.5,14.9-28,21.5-28,21.5l28.9-4.7l8.9,11.7l-5.6,5.1l38.7-3.7c0,0-10.7,9.3-14.9,10.7 c-4.2,1.4-10.3,2.3-10.3,2.3s4.7,4.7,0.5,9.3c-3.7,3.7-12.1,7.5-12.1,7.5l28-11.7h20.1c0,0-12.6,6.1-15.9,8.9 c-3.3,3.3-6.1,9.8-6.1,9.8l-12.6,0.5c0,0,15.4,7,16.3,13.5c0.5,6.5-0.9,9.8-0.9,9.8l9.8,7.5c0,0-4.7-12.6-2.8-15.4 c1.9-2.8,10.7,1.9,14.9,7c6.5,7,7,18.7,7,18.7s0.9-6.1-0.5-14.9c-1.4-10.7-14.9-14.5-19.6-18.2c-4.2-3.3-3.7-9.3-1.4-14 c4.2-7.5,16.8-13.1,16.8-13.1l0.9,4.2l4.7-3.7c0,0,8.9,13.5,8.4,18.2c0,4.7-2.3,7.9-1.9,11.7c0.5,3.7,6.1,10.7,6.1,10.7 s-1.9-5.1-1.4-10.7c0.5-5.6,2.3-11.7,8.4-11.2c7.5,0.5,21,12.1,24.3,18.7c3.3,6.5,3.3,18.7,4.7,18.7s3.3-12.6,4.7-14.9 c1.4-2.3,3.3-2.3,3.3-2.3s1.9,0,3.3,2.3c1.4,2.3,3.3,14.9,4.7,14.9s1.4-12.1,4.7-18.7c3.3-6.5,16.8-18.2,24.3-18.7 c5.6-0.5,7.9,5.6,8.4,11.2c0,5.6-1.4,10.7-1.4,10.7s5.6-6.5,6.1-10.7c0.5-3.7-1.4-7-1.9-11.7c0-4.7,8.4-18.2,8.4-18.2l4.7,3.7 l0.9-4.2c0,0,12.1,5.6,16.8,13.1c2.8,4.2,2.8,10.7-1.4,14c-4.7,3.7-18.2,7.5-19.6,18.2c-1.4,8.9-0.5,14.9-0.5,14.9s0.5-11.7,7-18.7 c4.7-5.1,13.1-9.8,14.9-7s-2.8,15.4-2.8,15.4l9.8-7.5c0,0-1.9-3.3-0.9-9.8c0.5-6.5,16.3-13.5,16.3-13.5h-12.6c0,0-3.3-7-6.1-9.8 c-3.3-3.3-15.9-8.9-15.9-8.9h20.1l28,11.7c0,0-8.4-3.7-12.1-7.5c-4.2-4.2,0.5-9.3,0.5-9.3s-6.1-0.9-10.3-2.3 c-4.2-1.9-14.9-11.2-14.9-11.2l38.7,3.7l-5.6-5.1l8.9-11.7L299.3,212.1z M79.1,212.5l-32.7,3.3l-7-9.3l42.5,1.4L79.1,212.5z M142.1,262.9c-0.9,7.9-0.5,12.1-0.5,12.1s-5.6-7-12.1-13.1c-8.4-7-14.5-7.5-14.5-7.5s7.5-3.7,16.3-3.7s13.5,1.4,13.5,1.4 S142.5,257.3,142.1,262.9z M171,262.5c-7,5.6-12.1,13.1-12.1,13.1s0.5-4.2-0.5-12.1c-0.5-6.1-2.8-10.7-2.8-10.7s4.7-1.4,13.5-1.4 s16.3,3.7,16.3,3.7S179.9,255,171,262.5z M254.1,215.8l-33.1-3.3l-2.8-4.2l42.5-1.4L254.1,215.8z"></path></svg>`
      } else {
        newData["win"] = `Победа сил Тьмы`
        newData["win_img"] = `<svg class="sc-cSHVUG dOJDxW" viewBox="0 0 300 300"><path d="M150,106.4c0,0,6.6,0,8,0.5c1.4,0.5,2.3,4.2,5.2,5.2c2.3,0.9,35.6,1.4,35.2,3.7c0,2.3-2.3,2.8-2.8,3.8 c-0.5,1.4,1.4,3.3-3.3,3.8c-4.7,0.9-5.6-3.3-5.6-3.3s-8.9-1.4-15.5,0.5c-3.3,0.9-5.6,4.2-8,6.6c-2.3,2.3-4.2,3.3-4.7,4.2 c-0.9,2.3-0.5,5.6,0.5,6.1c0.9,0.5,4.2-4.7,5.6-5.6c0.5-0.5,4.2-1.4,8.9-1.9c1.9-0.5,3.8,0.5,5.6,0c3.8-0.5,7-1.9,9.8-2.8 c5.6-1.4,10.3-2.3,10.3-2.8c0.9-0.9,0.5-4.2,0.5-4.2s1.9-0.9,1.9-1.9s-0.9-1.9-1.4-2.3c-0.5-0.5,0-4.7-1.4-6.1 c-1.4-1.4-23-3.8-23.9-5.2c-0.9-1.4,1.4-2.8,0.5-6.6c-0.9-3.8-1.9-12.7-1.9-12.7s0-13.6-0.5-15.5c-0.5-1.9-0.5-0.9-1.4-2.3 c-0.9-1.4-1.4-10.8-1.4-10.8s2.3,0.5,3.8-0.5c1.4-0.9,2.8-5.6,2.8-5.6s4.2-0.5,4.7-0.9c0.5-0.5,0.9-3.3,0.9-4.2 c0-1.4-0.9-1.9-0.9-3.8c0-1.9,0.5-6.1,0.5-6.6c0.5,0-1.4-0.5-1.9-1.4c-0.5-0.9-1.9-3.3-1.9-3.3s5.2,3.8,7,0.9s0.9-7,0.9-7 s-3.3-6.1-3.3-7.5s0.9-7.5,0.9-7.5l1.4-1.4c0,0-2.3-3.3-2.3-4.2c0-0.9,1.4-3.8,2.8-3.8c1.4,0,1.9,3.8,1.9,3.8s0.5,3.3,0.9,6.1 c0.5,2.8,5.2,10.3,5.2,10.3s-1.4,8,0,9.4c1.4,1.4,3.3-2.3,4.2-0.5c0.9,1.9-1.4,1.4-0.9,5.2s2.8,3.3,2.8,3.3s-0.5,4.2-0.5,7 c0.5,2.8,1.9,5.2,1.9,5.2s-9.4,7.5-7.5,9.8c1.9,2.3,5.6,2.3,8,0.9c2.3-0.9,6.6-5.6,6.6-5.6s1.9,1.9,1.4,2.3 c-0.5,0.5-1.9,1.9-0.9,4.2s4.2,2.8,4.2,2.8s-1.4,4.7-2.3,5.6c-0.9,0.9-3.3,0.5-3.3,0.5s-1.4,1.4-2.3,1.9c-0.9,0.5-4.2,0.9-4.2,0.9 l0.9,2.8c0,0-4.7,2.3-2.3,3.8c4.2,2.8,8.9-1.9,8.9-1.9s1.4,0.9,2.8,0.5c1.4-0.5,1.4-1.9,1.4-1.9h2.8c0,0-2.3,5.6-1.4,6.6 c0.9,1.4,6.1-2.3,5.6,0.9c-0.9,2.8-10.3,2.3-13.1,5.6c-2.8,3.3-0.5,6.6,0.9,6.6c1.4,0.5,18.3-8.4,19.7-5.2c1.9,3.3-3.8,5.6-2.8,8.4 c0.9,2.8,8-2.3,8,1.4c0,3.3-9.4,7.5-8,10.3c1.4,2.8,3.8,0.9,3.8,0.9s4.2,1.9,4.7,2.8c0.5,0.9-4.7,1.9-4.7,1.9l-0.5,1.9l4.2,0.5 c0,0,3.3,3.7,3.8,5.2c0,1.4-13.1,4.2-13.1,5.6c-0.5,1.4,0.5,1.9,0.5,1.9s-3.3-0.5-4.7,0c-1.4,0.5-5.6,3.7-5.6,3.7 s-7.5-1.9-10.3-1.4c-2.8,0.5-7.5,2.3-7.5,2.3l3.8,0.9l-3.8,3.8c0,0,5.6,1.9,9.4,1.4c3.8-0.5,10.8-5.2,12.7-6.1 c1.9-0.5,8.4-0.5,8.4-0.5s10.8-7.5,13.1-5.6c2.3,2.3-0.5,8.9-0.5,11.3s0.9,8,0.9,8s-15.5,0-19.7,1.4c-3.8,0.9-6.6,2.8-6.6,2.8h-4.7 l-1.4,5.2c0,0-14.5,0-14.1,0.9c0.5,0.9,4.2,0.9,4.7,1.9c0.9,0.9,0,2.3,0,2.3h-5.2l-11.3,2.3l16.9,1.4c0,0-0.5,7-1.9,8 s-4.7,0.5-5.6-0.5s-2.3-1.9-2.3-1.9s-12.7,8-13.1,11.3c-0.5,2.8,5.2-0.5,8.4,2.8c1.4,1.9,0.5,3.8-0.5,5.2c-0.5,1.4,0,1.9-0.9,2.8 c-1.4,2.3-8.9,2.8-7.5,6.1c3.3,3.3,4.7-1.4,6.6-0.5c1.9,0.9-0.5,8.9-0.5,8.9s-13.1,3.8-11.3,7s5.6-2.3,8.4-0.5 c2.8,1.4,0.9,9.8,0.9,9.8s-5.2-0.5-5.2,1.4s5.6-0.9,6.1,1.4c0.5,2.3-1.9,2.8-1.9,2.8s0,8.4,0.5,9.4c0.5,0.9,2.8,0.9,2.8,0.9 s-1.4,3.3-5.2,5.6c-3.3,1.9-4.7-2.3-6.6-0.9s3.3,5.2,3.3,5.2s-1.9,2.8-2.8,7.5c-0.9,4.7-0.9,11.7-0.9,11.7s-5.2,4.2-6.6,8 c-1.4,3.8-3.8,13.1-4.7,14.5c-1.4,1.4-7,6.1-7,6.1V106.4z"></path><path d="M170.2,102.2l-6.6-0.9c0,0,0.9-2.3,0.9-4.2c0-2.3-0.9-4.2,0.5-7c1.4-2.8,2.8-8.4,2.8-8.4s0.9,9.8,2.3,13.1 C172,98,170.2,102.2,170.2,102.2z"></path><path d="M201.6,215.2c0,0-8.9,2.3-10.3,4.2c-1.4,1.9-1.4,10.8-1.4,10.8s3.8,0.9,9.4,5.6s9.8,8,9.8,8s1.9-6.6,0.5-9.4 c-1.4-2.8-2.8-4.2-2.8-4.2s1.9-3.3,0.5-7C206.3,219.4,201.6,215.2,201.6,215.2z"></path><path d="M203.4,258.3c0,0-2.3,0.5-6.1,4.7c-4.2,4.2-3.3,5.6-3.3,5.6s6.6,5.6,11.3,7.5s6.6,0.9,10.3,3.3 s10.3,8.9,12.2,6.6c1.9-2.8-2.8-4.7-9.4-11.3C212.3,267.7,203.4,258.3,203.4,258.3z"></path><path d="M199.2,191.3c0,0,9.8-17.3,15.9-19.7s15,2.8,15.9,1.4c0.9-1.4-3.3-3.7-3.3-3.7l7-3.8c0,0,0.5,1.9,3.7,2.8 c3.3,0.9,12.2-1.4,12.2-1.4l-13.1,6.1c0,0,7,1.4,11.3,4.2c4.2,2.3,7,6.1,7,6.1l7.5,1.4c0,0-0.5,3.3-4.7,3.3s-23-1.4-23-1.4 s-7,4.2-5.2,5.6c1.9,1.4,12.2-0.5,12.2-0.5l-6.1,4.2l-6.1,2.3c0,0,3.8,3.8,8.9,4.7c5.2,0.9,12.7-1.9,12.7-1.9s1.9,3.8,3.8,6.1 c1.9,2.3,23.4,15,23.4,15s-0.9,3.8-7.5,3.3c-6.1-0.5-22-6.6-23.4-6.1c-1.4,0.5-3.3,1.4-3.3,1.4s-1.4-5.2-2.8-6.1 c-1.4-0.9-5.6-0.5-5.6-0.5l-11.3-8.4c0,0-3.3,10.3,8,17.8c10.8,7.5,20.6,3.8,20.6,3.8s9.4,9.8,14.5,12.2 c5.2,2.3,19.2,9.4,17.3,10.3c-0.5,0.5-2.3,0.9-3.3,0.5c-2.3-0.9-4.2-4.2-7.5-5.2c-4.7-1.4-9.4,0.5-9.4,0.5l-4.2-1.9l-13.1,0.5 l-4.7,3.3l-8.4-1.9c0,0,0.5,6.6,4.7,9.4c4.2,2.8,8.4,1.9,8.4,1.9s18.3,20.6,30.5,26.7c12.2,5.6,21.1,8.4,21.1,8.4s-20.6-3.8-28.6-8 c-13.6-7.5-20.6-13.6-28.1-18.8c-7.5-5.2-23-8-23-8s0.5-10.3-0.5-14.1c-0.9-3.7-6.6-8-6.6-8s0.9-5.2,0.9-7.5s-2.3-2.8-2.3-2.8 l-0.9-4.7c0,0-6.1-8.9-6.1-13.1c0-4.2,0.9-8.9,0.9-8.9s1.4-6.6-0.9-6.6C203,191.3,199.2,191.3,199.2,191.3z"></path><path d="M241.4,75c0,0,3.3,0.5,7.5,3.3c4.2,2.8,4.2,7.5,8.4,7.5c4.2,0,11.7-11.7,14.5-13.1c3.3-1.4,5.2,1.4,5.2,1.4 l9.4-15l-5.2-2.8c0,0-6.6,7.5-8.9,7c-2.8,0-6.1-0.5-6.1-0.5s-5.2,13.1-8.4,13.6c-3.3,0.5-0.5-11.7,0.9-15 c1.4-2.8,10.3-3.8,10.3-3.8l8.9-17.3c0,0-2.8,3.8-5.2,5.6c-2.3,1.9-13.6-0.5-16.4,0.5c-2.3,0.9-6.6,1.9-6.6,1.9s0-4.2,1.4-8 c1.4-3.8,7-7,7.5-9.4s0-5.2,1.4-7c1.9-1.4,7-7.5,7-7.5s-8.4,3.8-10.3,6.1c-1.9,2.3-2.8,8-4.7,11.7c-2.3,4.2-13.1,8.4-13.1,8.4 s3.8,5.6,4.7,8c1.4,2.3-1.9,5.2-1.9,5.2s2.8,4.7,3.3,8C245.6,67,241.4,75,241.4,75z"></path><polygon points="236.7,73.6 240.5,66.6 238.1,60.9 234.4,48.3 234.4,56.7 232,63.3"></polygon><polygon points="227.3,41.7 236.3,24.4 233.4,25.8 225,33.3"></polygon><path d="M150,106.4c0,0-6.6,0-8,0.5c-1.4,0.5-2.3,4.2-5.2,5.2c-2.3,0.9-35.6,1.4-35.2,3.7c0,2.3,2.3,2.8,2.8,3.8 c0.5,1.4-1.4,3.3,3.3,3.8c4.7,0.9,5.6-3.3,5.6-3.3s8.9-1.4,15.5,0.5c3.3,0.9,5.6,4.2,8,6.6c2.3,2.3,4.2,3.3,4.7,4.2 c0.9,2.3,0.5,5.6-0.5,6.1c-1.4,0-4.2-4.7-5.6-5.6c-0.5-0.5-4.2-1.4-8.9-1.9c-1.9-0.5-3.8,0.5-5.6,0c-3.8-0.5-7-1.9-9.8-2.8 c-5.6-1.4-10.3-2.3-10.3-2.8c-0.9-0.9-0.5-4.2-0.5-4.2s-1.9-0.9-1.9-1.9c0-1.4,0.9-1.9,1.4-2.3c0.5-0.5,0-4.7,1.4-6.1 c1.4-1.4,23-3.8,23.9-5.2c0.9-1.4-1.4-2.8-0.5-6.6c0.9-3.8,1.9-12.7,1.9-12.7s0-13.6,0.5-15.5s0.5-0.9,1.4-2.3s1.4-10.8,1.4-10.8 s-1.9-0.5-3.3-1.4s-2.8-5.6-2.8-5.6s-4.2-0.5-4.7-0.9c-0.5-0.5-0.9-3.3-0.9-4.2c0-1.4,0.9-1.9,0.9-3.8c0-1.9-0.5-6.1-0.5-6.6 c-0.5,0,1.4-0.5,1.9-1.4c0.5-0.9,1.4-2.3,1.4-2.3s-5.2,3.8-7,0.9s-0.9-7-0.9-7s3.3-6.1,3.3-7.5s-1.4-7.5-1.4-7.5L114.4,8 c0,0,2.3-3.3,2.3-4.2c0.5-0.9-0.9-3.7-2.3-3.7c-0.9,0-1.9,3.8-1.9,3.8S112,7,111.6,9.8c-0.5,2.8-5.2,10.3-5.2,10.3s1.4,8,0,9.4 c-1.4,1.4-3.3-2.3-4.2-0.5c-0.9,1.9,1.4,1.4,0.9,5.2s-2.8,3.3-2.8,3.3s0.5,4.2,0.5,7s-2.3,4.7-2.3,4.7s9.4,7.5,7.5,9.8 s-5.6,2.3-8,0.9c-2.3-0.9-6.6-5.6-6.6-5.6s-1.9,1.9-1.4,2.3c0.5,0.5,1.9,1.9,0.9,4.2c-0.9,2.3-4.2,2.8-4.2,2.8s1.4,4.7,2.3,5.6 c0.9,0.9,3.3,0.5,3.3,0.5s1.4,1.4,2.3,1.9c0.9,0.5,4.2,0.9,4.2,0.9L98,75.5c0,0,4.7,2.3,2.3,3.8c-4.2,2.8-8.9-1.9-8.9-1.9 s-1.4,0.9-2.8,0.5c-1.4-0.5-1.4-1.9-1.4-1.9h-2.8c0,0,2.3,5.6,1.4,6.6c-0.9,1.4-6.1-2.3-5.6,0.9c0.9,2.8,10.3,2.3,13.1,5.6 c2.8,3.3,0.5,6.6-0.9,6.6c-1.4,0.5-18.3-8.4-19.7-5.2c-1.9,3.3,3.8,5.6,2.8,8.4c-0.9,2.8-8-2.3-8,1.4c0,3.3,9.4,7.5,8,10.3 c-1.4,2.8-3.8,0.9-3.8,0.9s-4.2,1.9-4.7,2.8c-0.5,0.9,4.7,1.9,4.7,1.9l0.5,1.9l-4.2,0.5c0,0-3.3,3.7-3.8,5.2 c-0.5,1.4,13.1,4.2,13.1,5.6c0.5,1.4-0.5,1.9-0.5,1.9s3.3-0.5,4.7,0c1.4,0.5,5.6,3.7,5.6,3.7s7.5-1.9,10.3-1.4 c2.8,0.5,7.5,2.3,7.5,2.3l-3.8,0.9l3.8,3.8c0,0-5.6,1.9-9.4,1.4c-3.8-0.5-10.8-5.2-12.7-6.1c-1.9-0.9-8.4-0.5-8.4-0.5 s-10.8-7.5-13.1-5.6c-2.3,2.3,0.5,8.9,0.5,11.3s-0.9,8-0.9,8s15.5,0,19.7,1.4c4.2,1.4,6.6,2.8,6.6,2.8h4.7l1.4,4.2 c0,0,14.5,0,14.1,0.9c0,0.9-4.2,0.9-4.7,1.9c-0.9,0.9,0,2.3,0,2.3h5.2l11.3,2.3l-16.9,1.4c0,0,0.5,7,1.9,8c1.4,0.9,4.7,0.5,5.6-0.5 c1.9,0.5,2.8-0.5,2.8-0.5s12.7,8,13.1,11.3c0.5,3.3-5.2-0.5-8.4,2.8c-1.4,1.9-0.5,3.8,0.5,5.2c0.5,1.4,0,1.9,0.9,2.8 c1.4,2.3,8.9,2.8,7.5,6.1c-3.3,3.3-4.7-1.4-6.6-0.5c-1.9,0.9,0.5,8.9,0.5,8.9s13.1,3.8,11.3,7c-1.9,3.3-5.6-2.3-8.4-0.5 c-2.8,1.4-0.9,9.8-0.9,9.8s5.2-0.5,5.2,1.4s-5.6-0.9-6.1,1.4c-0.9,1.9,1.9,2.8,1.9,2.8s0,8.4-0.5,9.4c-0.5,0.9-2.8,0.9-2.8,0.9 s1.4,3.3,5.2,5.6c3.3,1.9,4.7-2.3,6.6-0.9c1.9,1.4-3.3,5.2-3.3,5.2s1.9,2.8,2.8,7.5c0.9,4.7,0.9,11.7,0.9,11.7s5.2,4.2,6.6,8 c1.4,3.8,3.7,13.1,4.7,14.5c0.9,1.4,7,6.1,7,6.1V106.4z"></path><path d="M98.4,215.2c0,0,8.9,2.3,10.3,4.2c1.4,2.3,1.4,10.8,1.4,10.8s-3.8,0.9-9.4,5.6s-9.8,8-9.8,8s-1.9-6.6-0.5-9.4 c1.4-2.8,2.8-4.2,2.8-4.2s-1.9-3.3-0.5-7C93.8,219.4,98.4,215.2,98.4,215.2z"></path><path d="M96.6,258.3c0,0,2.3,0.5,6.1,4.7c3.7,4.2,3.3,5.6,3.3,5.6s-6.6,5.6-11.3,7.5s-6.6,0.9-10.3,3.3 s-10.3,8.9-12.2,6.6c-1.9-2.8,2.8-4.7,9.4-11.3C87.7,267.7,96.6,258.3,96.6,258.3z"></path><path d="M100.8,191.3c0,0-9.8-17.3-15.9-19.7c-6.1-2.3-15,2.8-15.9,1.4c-0.9-1.4,3.3-3.7,3.3-3.7l-7-3.8 c0,0-0.5,1.9-3.8,2.8c-3.3,0.9-12.2-1.4-12.2-1.4l13.1,6.1c0,0-7,1.4-11.3,4.2c-4.2,2.8-7,5.6-7,5.6l-7.5,1.4c0,0,0.5,3.3,4.7,3.3 s23-1.4,23-1.4s7,4.2,5.2,5.6c-1.9,1.4-12.2-0.5-12.2-0.5l6.1,4.2l6.1,2.3c0,0-3.8,3.8-8.9,4.7c-5.2,0.9-12.7-1.9-12.7-1.9 s-2.3,3.3-4.2,5.6c-1.9,2.3-23.4,15-23.4,15s0.9,3.8,7.5,3.3c6.6-0.5,22-6.6,23.4-6.1c1.4,0.5,3.3,1.4,3.3,1.4s1.4-5.2,2.8-6.1 c1.4-0.9,5.6-0.5,5.6-0.5l11.3-8.4c0,0,3.3,10.3-8,17.8c-11.3,7.5-20.6,3.8-20.6,3.8s-9.4,9.8-14.5,12.2s-19.2,9.4-17.3,10.3 c0.5,0.5,2.3,0.9,3.3,0.5c2.3-0.9,4.2-4.2,7.5-5.2c4.7-1.4,9.4,0.5,9.4,0.5l4.2-1.9l13.1,0.9l4.7,3.3l8.4-1.9c0,0-0.5,6.6-4.7,9.4 s-8,2.8-8,2.8S33.3,278,21.1,284.1C8.4,289.7,0,292,0,292s20.6-3.8,28.6-8c13.6-7.5,20.6-13.6,28.1-18.8s23-8,23-8 s-0.5-10.3,0.5-14.1c0.9-3.7,6.6-8,6.6-8s-0.9-5.2-0.9-7.5s2.3-2.8,2.3-2.8l0.9-4.7c0,0,6.1-8.9,6.1-13.1c0-4.2-0.9-8.9-0.9-8.9 s-1.4-6.6,0.9-6.6S100.8,191.3,100.8,191.3z"></path><path d="M58.6,75c0,0-3.3,0.5-7.5,3.3c-4.2,2.8-4.2,7.5-8.4,7.5S30.9,74.1,28.1,72.7c-3.3-1.4-5.2,1.4-5.2,1.4l-9.4-15 l5.2-2.8c0,0,6.6,7.5,8.9,7c2.8,0,6.1-0.5,6.1-0.5s5.2,13.1,8.4,13.6c3.3,0.5,0.5-11.7-0.9-15c-1.4-2.8-10.3-3.8-10.3-3.8L22,40.3 c0,0,2.8,3.8,5.2,5.6c2.3,1.9,13.6-0.5,16.4,0.5c2.3,0.9,6.6,1.9,6.6,1.9s0-4.2-1.4-8c-1.4-3.8-7-7-7.5-9.4c-0.5-2.3,0-5.2-1.4-7 c-1.4-1.9-7-7.5-7-7.5s8.4,3.8,10.3,6.1c2.3,2.8,2.8,8,4.7,11.7c2.3,4.2,13.1,8.4,13.1,8.4s-3.8,5.6-4.7,8 c-1.4,2.3,1.9,5.2,1.9,5.2s-2.8,4.7-3.3,8C54.8,68,58.6,75,58.6,75z"></path></svg>`
      }
    }
    if (element[0] === "game_mode") {
      if (element[1] === "game_mode_unknown") {
        newData["game_mode"] = "game_mode_unknown"
      }
      if (element[1] === 0) {
        newData["game_mode"] = "All Pick"
      }
      if (element[1] === 1) {
        newData["game_mode"] = "game_mode_unknown"
      }
      if (element[1] === 2) {
        newData["game_mode"] = "Captains Mode"
      }
      if (element[1] === 3) {
        newData["game_mode"] = "Random Draft"
      }
      if (element[1] === 4) {
        newData["game_mode"] = "Single Draft"
      }
      if (element[1] === 5) {
        newData["game_mode"] = "All Random"
      }
      if (element[1] === 6) {
        newData["game_mode"] = "Intro"
      }
      if (element[1] === 7) {
        newData["game_mode"] = "Diretide"
      }
      if (element[1] === 8) {
        newData["game_mode"] = "Reverse Captains Mode"
      }
      if (element[1] === 9) {
        newData["game_mode"] = "Greeviling"
      }
      if (element[1] === 10) {
        newData["game_mode"] = "Tutoria"
      }
      if (element[1] === 11) {
        newData["game_mode"] = "Mid Only"
      }
      if (element[1] === 12) {
        newData["game_mode"] = "Least Played"
      }
      if (element[1] === 13) {
        newData["game_mode"] = "Limited Heroes"
      }
      if (element[1] === 14) {
        newData["game_mode"] = "Compendium Matchmaking"
      }
      if (element[1] === 15) {
        newData["game_mode"] = "Custom"
      }
      if (element[1] === 16) {
        newData["game_mode"] = "Captains Draft"
      }
      if (element[1] === 17) {
        newData["game_mode"] = "Balanced Draft"
      }
      if (element[1] === 18) {
        newData["game_mode"] = "Ability Draft"
      }
      if (element[1] === 19) {
        newData["game_mode"] = "Event"
      }
      if (element[1] === 20) {
        newData["game_mode"] = "Random Death Match"
      }
      if (element[1] === 21) {
        newData["game_mode"] = "1 vs 1 Mid"
      }
      if (element[1] === 22) {
        newData["game_mode"] = "All Draft"
      }
      if (element[1] === 23) {
        newData["game_mode"] = "Turbo"
      }
      if (element[1] === 24) {
        newData["game_mode"] = "Mutation"
      }
    }
    if (element[0] === "radiant_score") {
      newData["radiant_score"] = element[1]
    }
    if (element[0] === "dire_score") {
      newData["dire_score"] = element[1]
    }
    if (element[0] === "region") {
      if (element[1] === 1) newData["region"] = "ЗАПАД США"
      if (element[1] === 2) newData["region"] = "ВОСТОК США"
      if (element[1] === 3) newData["region"] = "ЕВРОПА"
      if (element[1] === 5) newData["region"] = "СИНГАПУР"
      if (element[1] === 6) newData["region"] = "ДУБАИ"
      if (element[1] === 7) newData["region"] = "АВСТРАЛИЯ"
      if (element[1] === 8) newData["region"] = "СТОКГОЛЬМ"
      if (element[1] === 9) newData["region"] = "АВСТРИЯ"
      if (element[1] === 10) newData["region"] = "БРАЗИЛИЯ"
      if (element[1] === 11) newData["region"] = "ЮЖНАЯ АФРИКА"
      if (element[1] === 12) newData["region"] = "PW ТЕЛЕКОМ ШАНХАЙ"
      if (element[1] === 13) newData["region"] = "PW ЮНИКОМ"
      if (element[1] === 14) newData["region"] = "ЧИЛИ"
      if (element[1] === 15) newData["region"] = "ПЕРУ"
      if (element[1] === 16) newData["region"] = "ИНДИЯ"
      if (element[1] === 17) newData["region"] = "PW ТЕЛЕКОМ ГУАНДЖОУ"
      if (element[1] === 18) newData["region"] = "PW ТЕЛЕКОМ ЧЖЕЦЗЯНЬ"
      if (element[1] === 19) newData["region"] = "ЯПОНИЯ"
      if (element[1] === 20) newData["region"] = "PW ТЕЛЕКОМ УХАНЬ"
      if (element[1] === 25) newData["region"] = "PW ЮНИКОМ ТЯНДЖИН"
      if (element[1] === 37) newData["region"] = "ТАИВАНЬ"
    }
  })

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.iconWrapper}>
          <div
            className={newData["radiant_win"]
              ? `${style.radianWinColor}, ${style.radianWinIcon}`
              : `${style.direWinColor}, ${style.direWinIcon}`}
            dangerouslySetInnerHTML={{__html: newData["win_img"]}}
          />
          <h2
            className={newData["radiant_win"]
              ? style.radianWinColor
              : style.direWinColor}>
            {newData["win"]}
          </h2>
        </div>
        <div>
          {newData["game_mode"]}
        </div>
        <div className={style.info}>
          <div>
            <div>Силы света</div>
            <div>{newData["radiant_score"]}</div>
          </div>
          <div>
            <div>Силы тьмы</div>
            <div>{newData["dire_score"]}</div>
          </div>
        </div>
        <div>
          <div>
            ID матча: {newData["match_id"]}
          </div>
          <div>
            Регион: {newData["region"]}
          </div>
        </div>
      </div>
    </div>
  );
}