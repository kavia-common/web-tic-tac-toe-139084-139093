import React from 'react';
import Board from './Board';
import { useTicTacToe } from '../hooks/useTicTacToe';

/**
 * Game is the main component for the two-player Tic Tac Toe experience.
 * It presents:
 *  - A header with title and a badge indicating the theme.
 *  - A status bar showing current turn/winner or draw and a score board.
 *  - The 3x3 game board.
 *  - A reset button that clears both the board and the score.
 */
function Game() {
  const {
    squares,
    statusText,
    score,
    winningLine,
    handlePlay,
    resetGame,
  } = useTicTacToe();

  return (
    <div className="game-card" aria-live="polite">
      <div className="game-header">
        <h1 className="title">
          Tic Tac Toe <span className="accent">•</span> Ocean Pro
        </h1>
        <span className="badge">2-Player</span>
      </div>

      <div className="status-bar">
        <div className="status-text">{statusText}</div>
        <div />
        <div className="score" aria-label="Score">
          <span className="x">X: {score.X}</span>
          <span className="o">O: {score.O}</span>
        </div>
      </div>

      <Board
        squares={squares}
        onSquareClick={handlePlay}
        winningLine={winningLine}
      />

      <div className="controls">
        <div />
        <button className="btn btn-secondary" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Game;
