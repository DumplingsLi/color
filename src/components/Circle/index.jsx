import React from "react";
import cls from "classnames";
import "./style.css";

export default function Circle({ color, index }) {
  return (
    <div
      className={cls("circle", `circle-${index}`)}
      style={{ backgroundColor: color }}
    ></div>
  );
}
