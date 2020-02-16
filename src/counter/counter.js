import React, { Component } from 'react';
import { connect } from 'react-redux';
import './counter.css';
import { addOneAC, palindromeResultAC } from '../redux/actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: '0',
      palindrome: false,
    };
  }

  counterIncrease = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.sendCounter((+this.props.counter + 1).toString());
    }, 250);
  };

  palindromeTest = () => {
    clearTimeout(this.timer);
    let str = this.props.counter;
    this.props.sendResultPalindrome(
      str ===
        str
          .split('')
          .reverse()
          .join(''),
    );
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'block';
  };

  closeModal = () => {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
  };

  render() {
    const palindrome = this.props.palindrome;
    return (
      <div className="App">
        <div className="container">
          <button className="forkButton" onDoubleClick={this.palindromeTest} onClick={this.counterIncrease}></button>
          <div className="counter">
            <p className="counterText">{this.props.counter}</p>
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

function mapStateToProps(state) {
  return {
    counter: state.counter,
    palindrome: state.palindrome,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendCounter: counter => dispatch(addOneAC(counter)),
    sendResultPalindrome: result => dispatch(palindromeResultAC(result)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
