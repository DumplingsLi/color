import React from 'react';
import cls from "classnames";
import Transition from '../Transition'
import "./style.less";

export default function Card({name, index, isActive, bgcolor, onClick}) {
  return (
    <Transition num={index* 20}>
      {str => (
         <div
            className={cls(
              name,
              'card',
              str,
              isActive ? "active" : null
            )}
            style={{ backgroundColor: bgcolor }}
            onClick={onClick}
          >
        </div>
      )}
    </Transition>
  )
}
