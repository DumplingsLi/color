import React, { useState, useEffect } from 'react';
import cls from "classnames";
import Transition from '../Transition'
import "./style.less";

export default function Card ({set, style, onClick, currentColor, index }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimate(false), 1000)
  });

  return (
    <Transition num={index * 40}>
      <div
        className={cls(
          'card',
          set,
          set === currentColor ? "active" : null,
          animate? 'animate': null
        )}
        style={style}
        onClick={onClick}
      ></div>
    </Transition>
  );
}
