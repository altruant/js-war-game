





class Card {
  constructor({
    value,
    suit
  }) {
    this.value = value;
    this.suit = suit;
    this.cardInfo = function(){
      switch(this.values) {
        case 14: {return 'Ace'};
        case 13: {return 'King'};
        case 12: {return 'Queen'};
        case 11: {return 'Jack'};
        default: {return this.value.toString()};
      }
    }
  }
}

class Deck {
  constructor() {
    this.cards = [];
    const suits = ['Spades', 'Diamonds', 'Hearts', 'Club'];
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
  constructor() {}
}

const deck = new Deck()
const player1 = new Player();
const player2 = new Player()

const game = new Game()
