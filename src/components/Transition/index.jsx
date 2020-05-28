import React, { useState, useEffect } from 'react';
import classnames from 'classnames'
import './style.less'

export default function Transition({num, children}) {
  const [enter, setEnter] = useState(false);
  const [leave, setLeave] = useState(false)

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setEnter(true)
        resolve(true)
      }, num)
    }).then((res) => {
      if(res) {
        setTimeout(() => {
          setLeave(true)
        }, 800)
      }
    })
  });
  return (
    <React.Fragment>
      {children(classnames(
        enter ? null : 'before-enter',
        enter && !leave ? 'enter enter-active' : null)
      )}
    </React.Fragment>
  )
}
