import React from 'react'
import Card from './Card'

export default function CardGroup({cardColor, currentIndex, onChange}) {
  return cardColor.map((val, index) => {  
    return (
      <Card
        key={val}
        index={index}
        isActive={index === currentIndex}
        bgcolor={cardColor[index]}
        onClick={() => {
          onChange(index)
        }}
      />
    );
  })
} 
