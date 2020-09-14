class Army() {
  constructor() {
    this.soldiers = []
  }
}





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
    console.log('The armies ready...')
    // while(player1.hand.length > 0 && player2.hand.length > 0){
      let dealt = []
      dealt.push(player1.hand.shift(), player2.hand.shift())
      // console.log(dealt)

      if(dealt[0].value === dealt[1].value) {
        war();
      } else if(dealt[0].value > dealt[1].value) {
        console.log('P1 wins!');
        player1.hand.push(dealt.shift(), dealt.shift());

        // console.log('P1 Hand:', player1.hand)
      } else if(dealt[1].value > dealt[0].value) {
        console.log('P2 wins!');
        player2.hand.push(dealt.shift(), dealt.shift());

        // console.log('P2 Hand', player2.hand)
      }
    }
}
function war(){
  console.log('This means war!')


}

const deck = new Deck();
const player1 = new Player();
const player2 = new Player();
const game = new Game();
