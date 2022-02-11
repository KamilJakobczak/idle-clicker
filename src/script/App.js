import '../style/main.scss';
import Game from './Game';

function App() {
  return (
    <div className='gameWindow'>
      <div className='tasks'></div>
      <div className='tabs'></div>
      <div className='game'>
        <Game />
      </div>
      <div className='upgrades'></div>
    </div>
  );
}

export default App;
