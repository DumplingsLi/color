import React from "react";
import CircleGroup from "./components/circleGroup/index";
import Title from "./components/Title/index";
import CardGroup from './components/cardGroup/index'
import data from "./data/data.json";
import cls from "classnames";

export default class extends React.Component {
  constructor(props) {
    super(props)
    const cardColor = data.map(({ list }) => list[0].value);
    
    this.state = {
      cardColor,
      currentIndex: 0
    }
  }
 
  getColorList() {
    const { currentIndex } = this.state
    return data[currentIndex].list
  }

  toggleChangeCircle(color) {
    const { cardColor, currentIndex } = this.state
    const arrTemp = cardColor
    arrTemp[currentIndex] = color
    this.setState({
      cardColor: arrTemp
    })
  }

  toggleChangeCard(index) {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const { currentIndex, cardColor } = this.state
    
    return (
      <div className="color">
        <div className="color-table">
          <CircleGroup 
            list={this.getColorList()} 
            onChange={this.toggleChangeCircle.bind(this)}
          />
        </div>
        <div className="color-drawer">
          <Title />
          <div className="color-drawer__card">
            <CardGroup 
              cardColor={cardColor} 
              currentIndex={currentIndex} 
              onChange={this.toggleChangeCard.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
