// class Army() {
//   constructor() {
//     this.soldiers = []
//   }
// }

let round = 1
let warDealt = []
let dealt = []
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
  playGame() {
    console.log('The armies ready...')
    while(player1.hand.length > 0 && player2.hand.length > 0){
      dealt.push(player1.hand.shift(), player2.hand.shift())
      console.log(`Round: ${round}`, `P1: ${dealt[0].value} of ${dealt[0].suit} vs. P2: ${dealt[1].value} of ${dealt[1].suit}`)
      if(dealt[0].value > dealt[1].value) {
        console.log(`Player 1 wins the battle!`)
        dealt.forEach(function(item){
          player1.hand.push(item);
        });
        console.log(`Player 1: `, player1.hand, `Player 2: `, player2.hand)
        dealt=[];
        round++;
      } else if(dealt[1].value > dealt[0].value) {
        console.log(`Player 2 wins the battle!`)
        dealt.forEach(function(item){
          player2.hand.push(item);
        });
        console.log(`Player 1: `, player1.hand, `Player 2: `, player2.hand)
        dealt=[];
        round++;
      } else if(dealt[0].value === dealt[1].value) {
        this.war();
      }
    }
  }
  war() {
    console.log(`This means war!!!!`)
    warDealt.unshift(player1.hand.shift(), player2.hand.shift())
    warDealt.unshift(player1.hand.shift(), player2.hand.shift())
    console.log(`Cards face down: `, warDealt)
    console.log(`War: P1: ${warDealt[2].value} of ${warDealt[2].suit} vs. P2: ${warDealt[3].value} of ${warDealt[3].suit}`)
    if(warDealt[2].value > warDealt[3].value) {
      console.log(`Player 1 wins the spoils of war!`)
      dealt.forEach(function(item){
        player1.hand.push(item);
      });
      dealt=[];
      warDealt.forEach(function(item){
        player1.hand.push(item)
      });
      warDealt=[];
      console.log(`Player 1: `, player1.hand, `Player 2: `, player2.hand)
    } else if(warDealt[3].value > warDealt[2].value) {
      console.log(`Player 2 wins the spoils of war!`)
      dealt.forEach(function(item){
        player2.hand.push(item);
      });
      dealt=[];
      warDealt.forEach(function(item){
        player2.hand.push(item)
      });
      warDealt=[];
      console.log(`Player 1: `, player1.hand, `Player 2: `, player2.hand)
    } else if(warDealt[2].value === warDealt[3].value) {
      this.war();
    }
  }
}


const deck = new Deck();
const player1 = new Player();
const player2 = new Player();
const game = new Game();
