import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {


  closeModal = () => {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
  };

  render() {
    let palindrome = this.props.palindrome;
    return (
      <div className="modal">
        <div className="modal_content">
          <span onClick={this.closeModal} className="close">
            X
          </span>
          <p className="answer">{palindrome ? 'Это палиндром!!!' : 'Не, это не палиндром...'}</p>
        </div>
      </div>
    );
  }
}
