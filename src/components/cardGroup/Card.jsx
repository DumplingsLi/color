import React, { useState, useEffect} from 'react';
import cls from "classnames";
import Transition from '../Transition'
import "./style.less";

export default function Card({name, index, isActive, bgcolor, onClick}) {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    setTimeout(() => 
      setAnimate(false)
    , 1000)
  })

  return (
    <Transition num={index * 40}>
      <div
        className={cls(
          name,
          'card',
          isActive ? "active" : null,
          animate? 'animate': null
        )}
        style={{backgroundColor: bgcolor}}
        onClick={onClick}
      ></div>
    </Transition>
  );
}
