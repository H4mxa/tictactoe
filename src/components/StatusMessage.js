import React from 'react';

function StatusMessage({ winner, current }) {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const noMoveleft = current.board.every(element => element !== null);

  return (
    <div>
      <h2>
        {winner && `Winner is ${winner}`}{' '}
        {!winner &&
          !noMoveleft &&
          `Next player is ${current.isXNext ? 'X' : 'O'}`}
        {!winner && noMoveleft && `X and O tied`}
      </h2>
    </div>
  );
}

export default StatusMessage;
