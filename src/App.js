import Board from './components/Board';
import React, { useState } from 'react';
import './styles/root.scss';
import { calculateWinner } from './helper';
import History from './components/History';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  console.log(history);
  // To track moves
  const [currentMove, setCurrentMove] = useState(0);

  // To know current game state
  // history with index of current move
  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prevState => {
      const last = prevState[prevState.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return current.isXNext ? 'X' : '0';
        }
        return square;
      });

      return prevState.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prevState => {
      return prevState + 1;
    });
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
