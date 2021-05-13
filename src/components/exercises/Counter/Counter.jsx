import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() { 
    console.log('did mount');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  handleClick() {
    if (this.state.count < this.props.maxValue) {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
    // this.props.sayHi();
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click here</button>
        {this.state.count === this.props.maxValue
          ? <span>You reach the limit</span>
          : null
        }
        <p>The max value is {this.props.maxValue}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Counter;