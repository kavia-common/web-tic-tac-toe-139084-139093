import React from 'react';
import Square from './Square';

/**
 * Board renders a 3x3 grid of Square components.
 * Props:
 * - squares: string[] length 9 with values 'X' | 'O' | null
 * - onSquareClick: (index: number) => void
 * - winningLine: number[] | null - indexes of winning squares to highlight
 */
function Board({ squares, onSquareClick, winningLine }) {
  const isWinning = (i) => Array.isArray(winningLine) && winningLine.includes(i);

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((v, i) => (
        <Square
          key={i}
          value={v}
          onClick={() => onSquareClick(i)}
          isWinning={isWinning(i)}
        />
      ))}
    </div>
  );
}

export default Board;
