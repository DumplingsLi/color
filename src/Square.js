import React from 'react';

// 受控组件
export default function Square (props) {
    return (
      <button 
        className="square" 
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
    );
}
