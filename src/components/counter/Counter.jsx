import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick() {
    console.log('click');
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button>Click aqui</button>
      </div>
    )
  }
}

export default Counter;