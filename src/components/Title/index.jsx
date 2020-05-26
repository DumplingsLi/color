import React from "react";
import C from './C'
import O from './O'
import L from './L'
import R from './R'
import Transition from '../Transition'
import "./style.less";
const textColor = {
  c: {fill: "#ffb93f"},
  o: {fill: "#ac568a"},
  l: {fill: "#4f93a3"},
  o2: {fill:"#BC5569"},
  r: {fill:"#a7bd3f"},
};

export default function Title() {
  const randomTime = new Array(5).fill(0.3).map((v, index) => {
    return {
      animationDuration: `${v + index * 0.2}s`,
    };
  });
  return (
    <div className="title">
      <Transition num={0 }><C fill={textColor.c}/></Transition>
      <Transition num={1 * 80}><O fill={textColor.o}/></Transition>
      <Transition num={2 * 80}><L fill={textColor.l}/></Transition>
      <Transition num={3 * 80}><O fill={textColor.o2}/></Transition>
      <Transition num={4 * 80}><R fill={textColor.r}/></Transition>
    </div> 
  );
}
