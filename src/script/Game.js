import React, { Component } from 'react';
import GameItems from './GameItems';

class Game extends Component {
  state = {
    stone: 0,
    spears: 0,
    knives: 0,
    slingshots: 0,
    bows: 0,
  };
  items = ['Throwing stones', 'Spears', 'Tusk knives', 'Slingshots', 'Bows'];
  productionTime = [2, 4, 8, 16, 32];
  render() {
    return (
      <>
        <GameItems item={this.items[0]} />
        <GameItems item={this.items[1]} />
        <GameItems item={this.items[2]} />
        <GameItems item={this.items[3]} />
        <GameItems item={this.items[4]} />
      </>
    );
  }
}

// function Game(props) {
//   return (
//     <>
//       <div>Throwing stones</div>
//       <div>Spears</div>
//       <div>Tusk knives</div>
//       <div>Slingshots</div>
//       <div>Bows</div>
//     </>
//   );
// }
export default Game;
