import { Component } from "react";
import "./css/button.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.buttonIncrement = this.handleIncrement.bind(this);
    this.buttonDecrement = this.handleDecrement.bind(this);
    this.buttonReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  handleReset() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        <h2>Q6 Counter</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.buttonIncrement}>Increment</button>
        &nbsp; &nbsp;
        <button onClick={this.buttonDecrement}>Decrement</button>
        &nbsp; &nbsp;
        <button onClick={this.buttonReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
