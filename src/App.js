import React, { Component } from "react";
import LKCard from "./components/Card/Index";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/index";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  // This will set the state of the cards
  state = {
    cards,
    clickedCard: [],
    score: 0,
  };

  clickImage = event => {
    const currentLK = event.target.alt;
    const imagedClicked = this.state.clickedCard.indexOf(currentLK) > -1;

    if (imagedClicked) {
      this.setState({
        cards: this.state.cards.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCard: [],
        score: 0
      });
      alert("OOHH NO!!  You lost!  Play again?");
    } else {
      this.setState(
        {
          cards: this.state.cards.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedCard: this.state.clickedCard.concat(
            currentLK
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12){
            alert("You're AWESOME!!  You won!");
            this.setState({
              cards: this.state.cards.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedCard: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} ></Header>
        {this.state.cards.map(cards => (
          <LKCard
            clickImage = {this.clickImage}
            id={cards.id}
            key={cards.id}
            image={cards.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
