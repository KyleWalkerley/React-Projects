import './App.css';
import React, {Component} from 'react';


class App extends React.Component {
  constructor() {
    super();

    this.onClickMe = () => {
      console.log(this);
      }
    }

    render() {
      return (
       <button
        onClick={this.onClickMe.bind(this)}
        type="button"
    >
        Click Me
      </button>
    );
  }
}
  

export default App;
