import React from "react";
import C from './C'
import O from './O'
import L from './L'
import R from './R'
import Transition from '../Transition'
import "./style.less";

const textColor = [
  {fill: "#ffb93f"},
  {fill: "#ac568a"},
  {fill: "#4f93a3"},
  {fill:"#BC5569"},
  {fill:"#a7bd3f"},
];

export default function Title() {
  return (
    <div className="title">
      {textColor.map((c, index)=> {
        return <Transition num={index*80} key={`${c}${index}`}><Comp index={index} /></Transition>
      })}
    </div> 
  );
}

function Comp({index}) {
  switch (index) {
    case 0:
      return (<C fill={textColor[index]} />)
      break;
    case 1: 
      return (<O fill={textColor[index]}/>)
      break;
    case 2: 
      return (<L fill={textColor[index]}/>)
      break;
    case 3: 
      return (<O fill={textColor[index]}/>)
      break;
    case 4: 
      return (<R fill={textColor[index]}/>)
      break;
    default:
      break;
  }
}
