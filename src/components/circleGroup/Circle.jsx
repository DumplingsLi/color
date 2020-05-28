import React from "react";
import cls from "classnames";
import Clipboard from "clipboard";
import Transition from '../Transition'
import "./style.less";

export default class Circle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      descStyle: {},
      copy: false
    }
  }

  componentDidMount() {
    new Clipboard(this.dom);
  }

  onMouseMove = (e) => {
    const { left, top } = this.dom.getBoundingClientRect();
    this.setState({
      descStyle: {
        left: Math.floor(e.pageX - left) + 12, //12
        top: Math.floor(e.pageY - top) + 20, //20
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

  renderDesc() {
    const { name, color } = this.props;
    const { copy } = this.state;
    if (copy) {
      return <span>已复制</span>;
    } else {
      return (
        <React.Fragment>
          <span>{name}</span>
          <br />
          <span>{color}</span>
        </React.Fragment>
      );
    }
  }
  getDOM = (el) => (this.dom = el);
  render() {
    const { color, onClick, index } = this.props;
    const { show, descStyle, copy } = this.state;
    return (
      <Transition num={index*8}>
        {str => (
          <div
            ref={this.getDOM}
            className={`grid-item ${str}`}
            onMouseMove={this.onMouseMove}
            onMouseLeave={this.onMouseLeave}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onClick={onClick}
            data-clipboard-text={color}
          >
            <div className="circle">
              <svg>
                <circle r="50%" cy="50%" cx="50%" style={{ fill: color }} />
              </svg>
            </div>
            <div className={cls("desc", copy ? "copy" : null)} style={descStyle}>
              {this.renderDesc()}
            </div>
          </div>
        )}
      </Transition>
    );
  }
}
