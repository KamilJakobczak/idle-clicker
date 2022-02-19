import '../style/main.scss';

import React, { Component } from 'react';
import GameWindow from './GameWindow';
import Core from './Core';
import main from '../style/main.scss';

class App extends Component {
  state = {
    income: 0,
  };
  render() {
    return (
      <div className='wrapper'>
        <Core />
        <GameWindow />
      </div>
    );
  }
}

export default App;
