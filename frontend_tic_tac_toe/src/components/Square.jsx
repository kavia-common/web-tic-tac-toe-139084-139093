import React from 'react';

/**
 * Square is a single cell in the Tic Tac Toe board.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - isWinning: boolean flag to indicate part of winning line
 */
function Square({ value, onClick, isWinning }) {
  const classes = ['square'];
  if (value === 'O') classes.push('o');
  if (isWinning) classes.push('winning');

  return (
    <button
      type="button"
      className={classes.join(' ')}
      onClick={onClick}
      aria-label={`Board cell ${value ? value : 'empty'}`}
    >
      {value}
    </button>
  );
}

export default Square;
