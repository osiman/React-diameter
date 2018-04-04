import React, { Component } from 'react';
import Circleview from './common/circle-view';
import './App.css';


class App extends Component {
  
  // default values
  constructor() {
    super();
    this.state = { 
      enterValue: '',
      clicked:false,
      activeButton:false
    };
  }

  // when input is changed & validate
  changeValue=(e)=> {
    const enterValue = (e.target.validity.valid) ? e.target.value : this.state.enterValue;
    if(enterValue > 100 ) {
      this.setState({ 
        enterValue:'',
        activeButton:false
      });
    }else {
      this.setState({ 
        enterValue:enterValue,
        clicked:false,
        activeButton:true
      });
    }
    e.preventDefault();
  }
 
  // when button on click -> send required parameter
  calculateClick = () => {
    const enterValue = this.state.enterValue;
    this.setState({
      area: Math.PI*enterValue*enterValue,
      environment:Math.PI*enterValue*2,
      clicked:true
    });
  }

  // render element 
  render() {
    return (
      <div className="App">
       <div className="form">
        <input type="text" className="inputNumber" pattern="[0-9]*"  maxLength={3} onChange={this.changeValue.bind(this)} value={this.state.enterValue} placeholder="number" />
        <button onClick={this.calculateClick} className={this.state.activeButton ? "active":"disabled"}>Calculate</button>
       </div>
       {this.state.clicked ? <Circleview postId={this.state.enterValue} areaValue={this.state.area} environmentValue={this.state.environment}/> : null}
      </div>
    );
  }
}

export default App;
