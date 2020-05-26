import React from "react";
import Circle from "./components/Circle/index";
import Title from "./components/Title/index";
import Card from './components/Card/index'
import data from "./data/data.json";
import cls from "classnames";

export default class extends React.Component {
  state = this.getInitialState();

  getInitialState() {
    const switchColor = {};
    data.forEach(({ set, list }) => {
      switchColor[set] = list[0].value;
    });

    return {
      currentColor: "red",
      currentList: data[0].list,
      switchColor
    };
  }
  renderList() {
    const { currentList, switchColor, currentColor } = this.state;

    return currentList.map(({ name, value }, index) => {
      return (
        <Circle
          key={name}
          name={name}
          color={value}
          index={index}
          onClick={() => {
            let curCol = switchColor;
            curCol[currentColor] = value;
            this.setState({
              switchColor: curCol,
            });
          }}
        />
      );
    });
  }

  renderCard() {
    const { currentColor, switchColor } = this.state;

    return data.map(({ set, list }, index) => {  
      return (
        <Card 
          key={set}
          set={set}
          index={index}
          currentColor={currentColor}
          style={{backgroundColor: switchColor[set]}}
          onClick={() =>
            this.setState({ currentList: list, currentColor: set })
          }
        />
      );
    })
  }

  render() {
    return (
      <div className="color">
        <div className="color-table">{this.renderList()}</div>
        <div className="color-drawer">
          <Title />
          <div className="color-drawer__card">{this.renderCard()}</div>
        </div>
      </div>
    );
  }
}
