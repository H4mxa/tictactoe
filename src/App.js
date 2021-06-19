import Board from './components/Board';
import React, { useState } from 'react';
import './styles/root.scss';
import { calculateWinner } from './helper';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  console.log(history);
  // To track moves
  const [currentMove, setCurrentMove] = useState(0);

  // To know current game state
  // history with index of current move
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

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

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={onNewGame}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
