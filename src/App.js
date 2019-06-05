import React, { Component} from 'react';
import Card from "./components/Card/Index";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import listCards from "./cards";
import cards from "./components/Card";
import './App.css';

class App extends Component {
  // This will set the state of the cards
  state = {
    card: listCards,
    score: 0,
    highscore: 0
  };

  gameOver =() => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function(){
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(cards => {
      cards.count = 0;
    });
    alert(`Game Over: ( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(this.state.cards[i].count === 0){
          this.state.cards[i].count = this.state.cards[i].count + 1;
          this.state({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver()
          ;
        };
      }
      return false;
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game </Header>
        {this.state.card.map(card => (
          <Card
          clickCount={this.state.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;
