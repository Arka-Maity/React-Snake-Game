import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';
import styles from "../styles/index.css";




class App extends Component {


  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={[[]]}/>
        <Food dot={[]}/>
      </div>
    );
  }
}

export default App;
