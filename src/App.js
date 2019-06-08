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
    highscore: 0,
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

  // gameOver = () => {
  //   if (this.state.score > this.state.highscore) {
  //     this.setState({ highscore: this.state.score }, function () {
  //       console.log(this.state.highscore);
  //     });
  //   }
  //   this.state.cards.forEach(card => {
  //     card.count = 0;
  //   });
  //   alert(`Game Over :( \nscore: ${this.state.score}`);
  //   this.setState({ score: 0 });
  //   return true;
  // }

  // clickCount = id => {
  //   this.state.cards.find((o, i) => {
  //     if (o.id === id) {
  //       if (cards[i].count === 0) {
  //         cards[i].count = cards[i].count + 1;
  //         this.setstate({ score: this.state.score + 1 }, function () {
  //           console.log(this.state.score);
  //         });
  //         this.state.cards.sort(() => Math.random() - 0.5)
  //         return true;
  //       } else {
  //         this.gameOver();
  //       }
  //     }
  //     return false;
  //   });
  // }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
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
