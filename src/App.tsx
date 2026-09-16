import { useRef, useState } from 'react';
import './App.css';
import { StartTimeButton } from '@/components/StartTimeButton/StartTimeButton';
import { Board } from './components/Board/Board';
import type { Cell } from './types/cell';
import { Header } from './components/Header/Header';
import { createBoard, InitBoard } from '@/utils/board';

function App() {
  const [time, setTime] = useState(0);
  const timerIdRef = useRef<number | null>(null);
  const boardX = 5;
  const boardY = 5;

  const stopTimer = () => {
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const [board, setboard] = useState<Cell[]>(() => InitBoard(boardX, boardY));
  const [clickedCount, setClickedCount] = useState(0);

  const handleStartTime = () => {
    // 前回のタイマー停止
    stopTimer();

    // カウントリセット
    setTime(0);
    setClickedCount(0);

    // 盤面作成
    setboard(createBoard(boardX, boardY));

    // 新しいタイマー開始（0.01秒単位）
    timerIdRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 10);
  };

  // セルクリック
  const handleCellClick = (x: number, y: number) => {
    const clickedCell = board.find((cell) => cell.x === x && cell.y === y);

    if (!clickedCell) {
      return;
    }

    if (clickedCell.value !== clickedCount) {
      return;
    }

    // 最後の数字が押された場合
    if (clickedCount === boardX * boardY - 1) {
      stopTimer();
    }

    setboard((currentBoard) =>
      currentBoard.map((cell) => (cell.x === x && cell.y === y ? { ...cell, isSelected: !cell.isSelected } : cell)),
    );

    setClickedCount((prev) => prev + 1);
  };

  return (
    <div className='app'>
      <Header timer={time} />
      <Board board={board} onCellClick={handleCellClick} />
      <StartTimeButton onStartTime={handleStartTime} />
    </div>
  );
}
export default App;
