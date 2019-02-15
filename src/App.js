import React, { Component } from 'react';
import './App.css';
import StatFinder from './english_generator/StatFinder'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startInteger: 1,
      endInteger: 123,
      targetCharacter: "e",
      stats: null
    };

    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleCalculateClick = this._handleCalculateClick.bind(this);
  }

  _handleInputChange(ev) {
    const nextState = {...this.state};
    nextState[ev.target.name] = ev.target.value;
    this.setState(nextState);
  }

  _handleCalculateClick(e) {
    e.preventDefault();
    const nextState = {...this.state};
    nextState.stats = StatFinder.findAllStats(
      nextState.startInteger,
      nextState.endInteger,
      nextState.targetCharacter
    );
    this.setState(nextState);
  }

  render() {
    return (
      <div className="App">
        <input
          type='number'
          name='startInteger'
          id='startInteger'
          value={this.state.startInteger}
          onChange={this._handleInputChange} />
        <input
          type='number'
          name='endInteger'
          id='endInteger'
          value={this.state.endInteger}
          onChange={this._handleInputChange} />
        <input
          type='submit'
          id="calculateButton"
          className="button"
          value="Calculate"
          onClick={this._handleCalculateClick} />
        <pre>
          { JSON.stringify(this.state) }
        </pre>
      </div>
    );
  }
}

export default App;
