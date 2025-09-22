import React from 'react';
import './App.css';
import Game from './components/Game';

/**
 * App is the root component for the Ocean Professional themed Tic Tac Toe application.
 * It renders the Game component which contains the board, status/score, and reset button.
 */
function App() {
  return (
    <div className="app-root">
      <Game />
    </div>
  );
}

export default App;
