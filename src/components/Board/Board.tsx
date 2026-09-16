import type { Cell } from '@/types/cell';
import './Board.css';
import { memo } from 'react';

interface BoardProps {
  board: Cell[];
  onCellClick: (x: number, y: number) => void;
}

export const Board = memo(function Board({ board, onCellClick }: BoardProps) {
  return (
    <div className='board'>
      {board.map((cell) => (
        <button
          key={`${cell.x}-${cell.y}`}
          className={`cell ${cell.isSelected ? 'selected' : ''} ${cell.value === undefined ? 'disabled' : ''}`}
          onClick={() => onCellClick(cell.x, cell.y)}
        >
          {cell.value}
        </button>
      ))}
    </div>
  );
});
