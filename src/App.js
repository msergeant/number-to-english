import React, { Component } from 'react';
import './App.css';
import StatFinder from './english_generator/StatFinder'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startInteger: 1,
      startError: '',
      endInteger: 123,
      endError: '',
      targetCharacter: "e",
      stats: null
    };

    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleCalculateClick = this._handleCalculateClick.bind(this);
  }

  _handleInputChange(ev) {
    const nextState = {...this.state};
    nextState.stats = null;
    nextState[ev.target.name] = ev.target.value;
    this.setState(nextState);
  }

  _handleCalculateClick(e) {
    e.preventDefault();
    const nextState = {...this.state};

    if(!this._checkForErrors(nextState)) {
      nextState.stats = StatFinder.findAllStats(
        nextState.startInteger,
        nextState.endInteger,
        nextState.targetCharacter
      );
    }
    this.setState(nextState);
  }

  _checkForErrors(state) {
    let errorsFound = false;
    let startInt = parseInt(state.startInteger);
    let endInt = parseInt(state.endInteger);
    state.startError = '';
    state.endError = '';

    if(endInt < startInt) {
      errorsFound = true;
      state.endError = "Last number must be greater than or equal to First Number";
    } else {
      if(endInt > 999 || endInt < 1) {
        errorsFound = true;
        state.endError = "Last number must be between 1 and 999";
      }
      if(startInt > 999 || startInt < 1) {
        errorsFound = true;
        state.startError = "First number must be between 1 and 999";
      }
    }

    return errorsFound;
  }

  render() {
    return (
      <div className="App">
        <h1>Number to English Generator</h1>
        <p>
          Choose a first number, last number, and a letter. The
          generator will print the English equivalent of all the
          numbers in the range and then tell you the number of times
          the specified letter appears.
        </p>
        <div className="form">
          <div className="field">
            <label className="label" >First Number</label>
            <input
              className={"input" + (this.state.startError ? " inputError" : "")}
              type="number"
              name="startInteger"
              id="startInteger"
              value={this.state.startInteger}
              onChange={this._handleInputChange} />
            { this.state.startError ? <span className="error">{ this.state.startError }</span> : '' }
          </div>
          <div className="field">
            <label className="label" >Last Number</label>
            <input
              className={"input" + (this.state.endError ? " inputError" : "")}
              type="number"
              name="endInteger"
              id="endInteger"
              value={this.state.endInteger}
              onChange={this._handleInputChange} />
            { this.state.endError ? <span className="error">{ this.state.endError }</span> : '' }
          </div>
          <div className="field">
            <label className="label" >Target Letter</label>
            <select
              className="input"
              name="targetCharacter"
              id="targetCharacter"
              value={this.state.targetCharacter}
              onChange={this._handleInputChange} >
              {
                "abcdefghijklmnopqrstuvwxyz".split('').map((x) => {
                  return <option key={x} value={x}>{x}</option>;
                })
              }
            </select>
          </div>
          <input
            type="submit"
            id="calculateButton"
            className="button"
            value="Calculate"
            onClick={this._handleCalculateClick} />
        </div>
        {
          !this.state.stats ? '' : (
            <div className="stats">
              <p>
                The generated string is { this.state.stats.length } characters long.
              </p>
              <p>
                The letter { this.state.targetCharacter } occurs { this.state.stats.occurrences } times.
              </p>
              <p>
                The probability of a randomly chosen character being { this.state.targetCharacter } is about { this.state.stats.targetProbability.toFixed(4) }%.
              </p>
              <h3> The Whole String: </h3>
              <p className="fullString">
                { this.state.stats.string.split(new RegExp(`(${this.state.targetCharacter})`, "g")).map( (x) => {
                   if(x === this.state.targetCharacter) {
                     return <span className="highlight">{x}</span>;
                   } else {
                     return <span>{x}</span>;
                   }
                  })
                }
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
