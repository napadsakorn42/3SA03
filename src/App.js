import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';

const massage = 'REFLECTION'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  }
}

class App extends React.Component {
  state = {hint: false}
  hint = () => {
    this.setState({hint: !this.state.hint})
  }
  state = prepareStateFromWord(massage);
  activationHandler = (value) => {
    let guess = [...this.state.guess, value]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
      }
      else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }

  render() {
  //  let test = this.state.completed === false ? '' : <button className="button" onClick={this.reset}><h2>Restart</h2></button>;
    return (
      <div>
        <div className="textname">
          <h3>3SA03 React(Card-Game) by Napadsakorn Sawaddeemongkhol 6035512042</h3>
        </div>
        {
          Array.from(this.state.chars).map((item, index) => (<CharacterCard value={item} key={index}
            activationHandler={this.activationHandler} />))
        }
        <h2>Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (<CharacterCard value={item} key={index}
            activationHandler={this.activationHandler} />))
        }
        <div>Attemp {this.state.attempt}</div>
        {
          this.state.completed && <h4>Component</h4>
        }
        <div className="box">
          <button className="button" onClick={this.hint}>HINT</button>
          {this.state.hint === true ? <p className="ans">Things to see in the mirror</p> : <p></p>}
        </div>
      </div>
    )
  }
}
export default App;