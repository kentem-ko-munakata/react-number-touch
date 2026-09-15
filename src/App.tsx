import { useEffect, useRef, useState } from 'react';
import './App.css';
import { StartTimeButton } from '@/components/StartTimeButton/StartTimeButton';
import { Board } from './components/Board/Board';
import type { Cell } from './types/cell';

function App() {
  const [time, setTime] = useState(0);
  const timerIdRef = useRef<number | null>(null);
  const boardX = 5;
  const boardY = 5;
  const [board, setboard] = useState<Cell[]>([]);

  useEffect(() => {}, []);

  const onStartTime = () => {
    // 前回のタイマー停止
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current);
    }

    // カウントリセット
    setTime(0);

    // 盤面作成
    setboard(createBoard(boardX, boardY));

    // 新しいタイマー開始（0.01秒単位）
    timerIdRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 10);
  };

  // ランダム数字生成
  const createNumbers = (boardX: number, boardY: number): number[] => {
    const numbers = Array.from({ length: boardX * boardY }, (_, i) => i);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers;
  };

  // 盤面作成
  const createBoard = (boardX: number, boardY: number): Cell[] => {
    const cells: Cell[] = [];
    const numbers = createNumbers(boardX, boardY);

    let index = 0;

    for (let y = 0; y < boardY; y++) {
      for (let x = 0; x < boardX; x++) {
        cells.push({
          x,
          y,
          value: numbers[index],
          isSelected: false,
        });

        index++;
      }
    }
    return cells;
  };

  // セルクリック
  const onCellClick = (x: number, y: number) => {
    setboard((currentBoard) =>
      currentBoard.map((cell) => (cell.x === x && cell.y === y ? { ...cell, isSelected: !cell.isSelected } : cell)),
    );
  };

  return (
    <div className='app'>
      <div>{(time / 100).toFixed(2)}</div>
      <Board board={board} onCellClick={onCellClick} />
      <StartTimeButton onStartTime={onStartTime} />
    </div>
  );
}
export default App;
