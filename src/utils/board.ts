import type { Cell } from '@/types/cell';

export const createNumbers = (boardX: number, boardY: number): number[] => {
  const numbers = Array.from({ length: boardX * boardY }, (_, i) => i);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
};

export const createBoard = (boardX: number, boardY: number): Cell[] => {
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

export const InitBoard = (boardX: number, boardY: number): Cell[] => {
  const cells: Cell[] = [];

  let index = 0;

  for (let y = 0; y < boardY; y++) {
    for (let x = 0; x < boardX; x++) {
      cells.push({
        x,
        y,
        isSelected: false,
      });

      index++;
    }
  }
  return cells;
};
