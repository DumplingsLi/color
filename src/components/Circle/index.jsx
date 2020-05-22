import React from "react";
import cls from "classnames";
import Clipboard from "clipboard";
import "./style.css";

export default class Circle extends React.Component {
  state = {
    show: false,
    descStyle: {},
    copy: false,
  };
  componentWillMount() {
    const { color, index } = this.props;
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, index * 8);
  }
  componentDidMount() {
    new Clipboard(this.dom);
  }
  onMouseMove = (e) => {
    const { left, top } = this.dom.getBoundingClientRect();
    this.setState({
      descStyle: {
        left: Math.floor(e.pageX - left) + 8,
        top: Math.floor(e.pageY - top) + 14,
        display: "block",
      },
    });
  };
  onMouseLeave = () => {
    this.setState({
      descStyle: {
        display: "none",
      },
      copy: false,
    });
  };
  onMouseDown = () => {
    this.setState({
      copy: true,
    });
  };
  // onMouseUp = () => {
  //   this.setState({
  //     copy: false,
  //   });
  // };
  getDOM = (el) => (this.dom = el);
  render() {
    const { color, name, index } = this.props;
    const { show, descStyle, copy } = this.state;
    return (
      <div
        ref={this.getDOM}
        className="circle"
        style={show ? { display: "block" } : null}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        data-clipboard-text={color}
      >
        <svg>
          <circle r="50%" cy="50%" cx="50%" style={{ fill: color }} />
        </svg>
        <div className="desc" style={descStyle}>
          {copy ? "已复制" : `${name}${color}`}
        </div>
      </div>
    );
  }
}
