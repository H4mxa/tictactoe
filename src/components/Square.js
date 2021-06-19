import React from 'react';

const Square = ({ value, onClick, isWinningSqaure }) => {
  console.log(value);
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        fontWeight: isWinningSqaure ? 'bold' : 'normal',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
