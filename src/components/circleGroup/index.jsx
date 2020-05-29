import React from "react";
import Circle from './Circle'

export default function CircleGroup({list, onChange}) {
  return list.map(({ name, value }, index) => {
    return (
        <Circle
          key={name}
          name={name}
          color={value}
          index={index}
          onClick={() => {
            onChange(value)
          }}
        />
    );
  });
}
  