import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: '0',
      palindrome: false,
    };
  }

  counterIncrease = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ counter: (+ this.state.counter + 1).toString() });
    }, 250);
  };

  palindromeTest = () => {
    clearTimeout(this.timer);
    let str = this.state.counter;
    this.setState({
      palindrome:
        str ===
        str
          .split('')
          .reverse()
          .join(''),
    });
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'block';
  };

  closeModal = () => {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
  };

  render() {
    const palindrome = this.state.palindrome;
    return (
      <div className="App">
        <div className="container">
          <button className="forkButton" onDoubleClick={this.palindromeTest} onClick={this.counterIncrease}></button>
          <div className="counter">
            <p class="counterText">{this.state.counter}</p>
          </div>
        </div>

        <div className="modal">
          <div className="modal_content">
            <span onClick={this.closeModal} className="close">
              X
            </span>
            <p className="answer">{palindrome ? 'Это палиндром!!!' : 'Не, это не палиндром'}</p>
          </div>
        </div>
      </div>
    );
  }
}
