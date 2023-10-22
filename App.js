import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      result: '',
    };
  }

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(this.state.display);
        this.setState({ display: '', result });
      } catch (error) {
        this.setState({ result: 'Error' });
      }
    } else if (value === 'C') {
      this.setState({ display: '', result: '' });
    } else {
      this.setState({ display: this.state.display + value });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <input
            type="text"
            className="display"
            value={this.state.display}
            readOnly
          />
          <div className="buttons">
            <button onClick={() => this.handleButtonClick('7')}>7</button>
            <button onClick={() => this.handleButtonClick('8')}>8</button>
            <button onClick={() => this.handleButtonClick('9')}>9</button>
            <button onClick={() => this.handleButtonClick('+')}>+</button>
            <button onClick={() => this.handleButtonClick('4')}>4</button>
            <button onClick={() => this.handleButtonClick('5')}>5</button>
            <button onClick={() => this.handleButtonClick('6')}>6</button>
            <button onClick={() => this.handleButtonClick('-')}>-</button>
            <button onClick={() => this.handleButtonClick('1')}>1</button>
            <button onClick={() => this.handleButtonClick('2')}>2</button>
            <button onClick={() => this.handleButtonClick('3')}>3</button>
            <button onClick={() => this.handleButtonClick('*')}>*</button>
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button onClick={() => this.handleButtonClick('C')}>C</button>
            <button onClick={() => this.handleButtonClick('=')}>=</button>
            <button onClick={() => this.handleButtonClick('/')}>/</button>
          </div>
          <div className="result">{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default App;
