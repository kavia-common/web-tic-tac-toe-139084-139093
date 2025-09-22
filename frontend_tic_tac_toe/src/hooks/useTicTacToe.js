import { useMemo, useState } from 'react';

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return { player: null, line: null };
}

/**
 * PUBLIC_INTERFACE
 * useTicTacToe manages the state and logic of a two-player Tic Tac Toe game.
 * Returns state and actions to interact with the game.
 */
export function useTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const { winner, isDraw, winningLine, statusText } = useMemo(() => {
    const { player, line } = calculateWinner(squares);
    const filled = squares.every(Boolean);
    const hasWinner = Boolean(player);
    const draw = !hasWinner && filled;

    let status = '';
    if (hasWinner) {
      status = `Winner: ${player}`;
    } else if (draw) {
      status = "It's a draw";
    } else {
      status = `Next: ${xIsNext ? 'X' : 'O'}`;
    }

    return {
      winner: player,
      isDraw: draw,
      winningLine: line,
      statusText: status,
    };
  }, [squares, xIsNext]);

  // PUBLIC_INTERFACE
  function handlePlay(index) {
    if (squares[index] || winner) return; // ignore if filled or game over

    const next = squares.slice();
    next[index] = xIsNext ? 'X' : 'O';
    setSquares(next);

    const { player } = calculateWinner(next);
    if (player) {
      setScore((prev) => ({ ...prev, [player]: prev[player] + 1 }));
    }

    setXIsNext((prev) => !prev);
  }

  // PUBLIC_INTERFACE
  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    // Score should reset with the board as per requirements
    setScore({ X: 0, O: 0 });
  }

  return {
    squares,
    xIsNext,
    winner,
    isDraw,
    winningLine,
    statusText,
    score,
    handlePlay,
    resetGame,
  };
}
