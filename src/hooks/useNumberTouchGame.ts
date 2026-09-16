import { useCallback, useRef, useState } from 'react';
import type { Cell } from '@/types/cell';
import { createBoard, InitBoard } from '@/utils/board';

export function useNumberTouchGame() {
  const [time, setTime] = useState(0);
  const timerIdRef = useRef<number | null>(null);
  const [board, setBoard] = useState<Cell[]>(() => InitBoard(5, 5));
  const [clickedCount, setClickedCount] = useState(0);

  const stopTimer = () => {
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const handleStartTime = useCallback(() => {
    stopTimer();

    setTime(0);
    setClickedCount(0);
    setBoard(createBoard(5, 5));

    timerIdRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 10);
  }, []);

  const handleCellClick = useCallback(
    (x: number, y: number) => {
      const clickedCell = board.find((cell) => cell.x === x && cell.y === y);

      if (!clickedCell || clickedCell.value !== clickedCount) {
        return;
      }

      if (clickedCount === 24) {
        stopTimer();
      }

      setBoard((currentBoard) =>
        currentBoard.map((cell) => (cell.x === x && cell.y === y ? { ...cell, isSelected: !cell.isSelected } : cell)),
      );

      setClickedCount((prev) => prev + 1);
    },
    [board, clickedCount],
  );

  return {
    time,
    board,
    handleStartTime,
    handleCellClick,
  };
}
