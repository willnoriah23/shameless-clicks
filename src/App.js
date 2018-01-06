import React, { Component } from 'react';
import fiona from './img/fiona.jpg';
import carl from './img/carl.jpg';
import frank from './img/frank.jpeg';
import ian from './img/ian.jpg';
import lip from './img/lip.jpg';
import veronica from './img/veronica.jpg';
import svetlana from './img/svetlana.jpg';
import mickey from './img/mickey.jpg';
import liam from './img/liam.jpg';
import kevin from './img/kevin.png';
import debbie from './img/debbie.jpg';
import shelia from './img/shelia.jpg';
import logo from './img/logo.png';
import './App.css';


var characters = [
    ["fiona", fiona, false], 
    ["frank", frank, false],
    ["debbie", debbie, false],
    ["veronica", veronica, false],
    ["lip", lip, false],
    ["kevin", kevin, false],
    ["liam", liam, false],
    ["ian", ian, false],
    ["svetlana", svetlana, false],
    ["mickey", mickey, false],
    ["shelia", shelia, false],
    ["carl", carl, false]
  ];

var topScore = 0;
var regScore = 0;

class App extends Component {

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      // Produce random number and temp number, then switch the two while generating new random number
      const rand = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[rand];
      array[rand] = temp;
    }
    return array;
  }


  handleInput = (e) => {
    // Accept click, note what img is clicked 
    // Check if previously clicked
    // Update score (start over or keep playing)
    // Shuffle imgs 
    for (var i = 0; i < characters.length; i++) {
      // if target id matches character in array & if character has been clicked before
      if (characters[i][0] == e.target.id && characters[i][2]) {

      console.log(e.target.id + " Has already been clicked");

        regScore = 0;

        characters = this.shuffleArray(characters);

        this.forceUpdate();
      
      break;
      // ! means if not true
      } else if (characters[i][0] == e.target.id && !characters[i][2]) {

      console.log(e.target.id + " Has not been clicked");
        characters[i][2] = true;
        regScore += 1;
        topScore = regScore;

        characters = this.shuffleArray(characters);

        this.forceUpdate();
        
        break;
      }
    };
    // e.target = an event, handler, target of the event
    // console.log('This is:', e.target.id);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          
          <img src = {logo} className="logo" />
          
          <h1 className="App-title">Clicky Game</h1>
          <h1>Click on a Gallagher to earn points, but don't click on any more than once!</h1>


          <h2>Score: {regScore} | Top Score: {topScore}</h2>

        </header>
        <img id={characters[0][0]} src={characters[0][1]} onClick={this.handleInput} className="character" />

        <img id={characters[1][0]} src={characters[1][1]} onClick={this.handleInput} className="character" />

        <img id={characters[2][0]} src={characters[2][1]} onClick={this.handleInput} className="character" />

        <img id={characters[3][0]} src={characters[3][1]} onClick={this.handleInput} className="character" />

        <img id={characters[4][0]} src={characters[4][1]} onClick={this.handleInput} className="character" />
        
        <img id={characters[5][0]} src={characters[5][1]} onClick={this.handleInput} className="character" />

        <img id={characters[6][0]} src={characters[6][1]} onClick={this.handleInput} className="character" />

        <img id={characters[7][0]} src={characters[7][1]} onClick={this.handleInput} className="character" />

        <img id={characters[8][0]} src={characters[8][1]} onClick={this.handleInput} className="character" />

        <img id={characters[9][0]} src={characters[9][1]} onClick={this.handleInput} className="character" />

        <img id={characters[10][0]} src={characters[10][1]} onClick={this.handleInput} className="character" />

        <img id={characters[11][0]} src={characters[11][1]} onClick={this.handleInput} className="character" />

      </div>
    );
  }
}

export default App;
