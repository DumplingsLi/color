import React from 'react'
import Circle from '../Circle/index'

export default class extends React.Component {
  onClick = val => {
    this.props.onClick(val)
  }

  render() {
    const { list } = this.props;

    return (
      <div className="palette">
        {list.map(({value}, index) => {
          return <Circle key={index} color={value} onClick={() => this.onClick(value)}/>
        })}
      </div>
    )
  }
}
