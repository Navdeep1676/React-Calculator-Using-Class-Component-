import './App.css';
import React, {
  Component
} from 'react';
import Keypad from './Keypad'
import Output from './Output'

class App extends Component {

  state = {
    result: ''
  }
  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate()
    } else if (buttonName === "AC") {
      this.reset()
    } else if (buttonName === "C") {
      this.backSpace()
    } else {
      this.setState({
        result: this.state.result + buttonName
      })
    }

  }
  calculate = () => {

    try {
      this.setState({
        result: (eval(this.state.result) || "") + ''
      })
    } catch (e) {
      this.setState({
        result: 'error'
      })
    }

  }
  reset = () => {
    this.setState({
      result: ''
    })
  }

  backSpace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }
  render() {
    return ( 
    <div className="App">
       <h2 style={{color:'rosybrown',fontStyle: 'italic',textDecoration: 'underline'}}> React Calcultor App </h2> 
      <Output result = {this.state.result} ></Output> 
      <Keypad buttonPressed = {this.buttonPressed}></Keypad> 
     </div>
    );
  }
}

export default App;