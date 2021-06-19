import React, { useState } from 'react';
import Square from './Square';

const Board = ({ handleSquareClick, board, winningSquares }) => {
  const renderSquare = position => {
    const isWinningSqaure = winningSquares.includes(position);

    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
        isWinningSqaure={isWinningSqaure}
      ></Square>
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
