// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    count : 0,
  };
  increment = () => {
    let cur = this.state.count;
    if ( cur == 0) {
      cur = 1;
    }
    this.setState({

      count : cur*2,
    });
  }
  decrement = () => {
    let cur = this.state.count;
    if ( cur == 0) {
      cur = 1;
    }
    this.setState({

      count : cur/2,
    });
  }
  render(){
    return <div>
      <center><h1>Test</h1>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Multiply By 2</button>
      <button onClick={this.decrement}>Divide By 2</button>
      </center>
 </div>
  }

}
//render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('root2'));
if(module.hot) module.hot.accept();