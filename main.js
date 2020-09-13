class Card {
  constructor({
    value,
    suit
  }) {
    this.value = value;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    for(const suit of suits){
      for(const value of values){
        this.cards.push(new Card({
          value,
          suit
        }));
      }
    }
    this.shuffle();
  }

  shuffle(){
    const { cards } = this;
    let m = cards.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [cards[m], cards[i]] = [cards[i], cards[m]];
    }
    return this;
  }
}

class Player {
  constructor() {
    this.hand = deck.cards.splice(0, 26);
    this.score = this.hand.length
  };
}

class Game {
  constructor() {
    this.playGame();
  }
  playGame(){
    let dealt = []
    dealt.push(player1.hand.splice(0,1), player2.hand.splice(0,1))
    if(dealt[0][0].value > dealt[1][0].value) {
      console.log('Player 1 wins!', `Player 1: ${dealt[0][0].value} of ${dealt[0][0].suit} vs Player 2: ${dealt[1][0].value} of ${dealt[1][0].suit}`);
      player1.hand.push(dealt[0][0], dealt[1][0])
      dealt = []
    } else if(dealt[1][0].value > dealt[0][0].value) {
      console.log('Player 2 wins!', `Player 1: ${dealt[0][0].value} of ${dealt[0][0].suit} vs Player 2: ${dealt[1][0].value} of ${dealt[1][0].suit}`);
      player2.hand.push(dealt[0][0], dealt[1][0]);
      dealt = [];
    } else {
      console.log('This means War!', `Player 1: ${dealt[0][0].value} of ${dealt[0][0].suit} vs Player 2: ${dealt[1][0].value} of ${dealt[1][0].suit}`);
    }
  }
}

const deck = new Deck();
const player1 = new Player();
const player2 = new Player();
const game = new Game();
console.log('Player 1 Hand:', player1.hand)
console.log('Player 2 Hand:', player2.hand)
