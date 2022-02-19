import React from 'react';
import Game from './Game';

function GameWindow(props) {
  return (
    <>
      <div className='gameWindow'>
        <div className='tasks'></div>
        <div className='tabs'></div>
        <div className='game'>
          <Game />
        </div>
        <div className='upgrades'></div>
      </div>
    </>
  );
}
export default GameWindow;
