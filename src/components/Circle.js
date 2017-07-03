import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextPorps, nextState) {
    return (this.props.color !== nextPorps.color)
  }
  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
