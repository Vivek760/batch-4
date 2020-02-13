// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    count : 0,
  };
  increment = () => {
    const cur = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: cur + 1,
    });
  }
  decrement = () => {
    const cur = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: cur - 1,
    });
  }
  render(){
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>

    </div>
  }

}
render(<App />, document.getElementById('root'));