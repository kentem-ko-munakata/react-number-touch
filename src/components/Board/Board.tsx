import type { Cell } from '@/types/cell';
import './Board.css';

interface BoardProps {
  board: Cell[];
  onCellClick: (x: number, y: number) => void;
}

export function Board({ board, onCellClick }: BoardProps) {
  return (
    <div className='board'>
      {board.map((cell) => (
        <div
          key={`${cell.x}-${cell.y}`}
          className={`cell ${cell.isSelected ? 'selected' : ''}`}
          onClick={() => onCellClick(cell.x, cell.y)}
        >
          {cell.value}
        </div>
      ))}
    </div>
  );
}
