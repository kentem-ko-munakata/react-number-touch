import './App.css';
import { StartTimeButton } from '@/components/StartTimeButton/StartTimeButton';
import { Board } from './components/Board/Board';
import { Header } from './components/Header/Header';
import { useNumberTouchGame } from '@/hooks/useNumberTouchGame';

function App() {
  const { time, board, handleStartTime, handleCellClick } = useNumberTouchGame();

  return (
    <div className='app'>
      <Header timer={time} />
      <Board board={board} onCellClick={handleCellClick} />
      <StartTimeButton onStartTime={handleStartTime} />
    </div>
  );
}
export default App;
