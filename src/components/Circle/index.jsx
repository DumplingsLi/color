import React from "react";
import cls from "classnames";
import "./style.css";

export default class Circle extends React.Component {
  state = {
    show: false,
  };
  componentWillMount() {
    const { color, index } = this.props;
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, index * 8);
  }

  render() {
    const { color, index } = this.props;
    const { show } = this.state;
    return (
      <div className="circle" style={show ? { display: "block" } : null}>
        <svg width="40px" height="40px">
          <circle
            r="20px"
            cy="20px"
            cx="20px"
            strokeWidth="1.5"
            style={{ fill: color }}
          />
        </svg>
      </div>
    );
  }
}
// Object.assign(style, { backgroundColor: color })
