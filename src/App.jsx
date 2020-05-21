import React from "react";
import Circle from "./components/Circle/index";
import list from "./data/list.json";
import cls from "classnames";
const title = [
  {
    color: "#0b1641",
    text: "C",
  },
  {
    color: "#c13261",
    text: "O",
  },
  {
    color: "#dbdbdb",
    text: "L",
  },
  {
    color: "#d7b799",
    text: "O",
  },
  {
    color: "#8c416a",
    text: "R",
  },
];
export default class extends React.Component {
  state = {
    currentColor: "red",
    currentName: "白",
    currentList: list[0].list,
  };

  renderList() {
    const { currentList } = this.state;
    return currentList.map(({ name, value }, index) => {
      return <Circle key={name} color={value} index={index} />;
    });
  }

  render() {
    const { currentColor, currentName } = this.state;

    return (
      <div id="app">
        <div className="wrapper">
          <div className="left">{this.renderList()}</div>
          <div className="right">
            <div className="title">
              {title.map(({ color, text }) => {
                return <span style={{ color }}>{text}</span>;
              })}
            </div>
            <div className="color-card">
              {list.map(({ set, list }) => {
                return (
                  <div
                    key={set}
                    className={cls(set, set === currentColor ? "active" : null)}
                    onClick={() =>
                      this.setState({ currentList: list, currentColor: set })
                    }
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
