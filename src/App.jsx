import React from "react";
import Circle from "./components/Circle/index";
import Title from "./components/Title/index";
import list from "./data/list.json";
import cls from "classnames";

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
            <Title />
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
