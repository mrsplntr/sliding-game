import React from 'react'

const Square = ({ index, x, y, num, white, move }) => {

  const handleClick = () => {
    const right =
      index + 1 <= 15 && index !== 3 && index !== 7 && index !== 11
        ? index + 1
        : false;
    const left =
      index - 1 >= 0 && index !== 4 && index !== 8 && index !== 12
        ? index - 1
        : false;
    const top = index - 4 >= 0 ? index - 4 : false;
    const bottom = index + 4 <= 15 ? index + 4 : false;
    move(index, right, left, top, bottom);
  }

  return (
    <div
      onClick={handleClick}
      className='square'
      style={{ position: 'absolute', top: y, left: x, backgroundColor: white }}
    >
      {num}
    </div>
  );
}

export default Square;