import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10));
      } else {
        odds.push(parseInt(arr[i], 10));
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className='even-and-odds'>
        <h4>Even and Odd</h4>
        <div className='puzzleBox'></div>
        <input className='inputLine'></input>
        <button className='confirmationButton'></button>
        <span className='resultBox'></span>
        <span className='resultBox'></span>
      </div>
    );
  }
}
