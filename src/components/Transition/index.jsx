import React, { useState, useEffect } from 'react';
import './style.less'

export default function Transition({num, children}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), num)
  });

  return <div className={show? 'enter': 'before-enter'}>{children}</div>
}