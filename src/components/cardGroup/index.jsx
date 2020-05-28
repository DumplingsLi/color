import React from 'react'
import Card from './Card'

export default function CardGroup({category, cardColor, currentIndex, onChange}) {
  return category.map((val, index) => {  
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
