import React, {useState, useEffect} from 'react';
import Square from './Square';
import { reset, shuffle, swap } from '../utils';

const Board = () => {
  const [board, setBoard] = useState(reset());
  const [winner, setWinner] = useState(false);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    handleShuffle();
  }, []);

  const checkWinner = () => {
    const winStatus = board.every((s, i) => s.num === reset()[i].num);
    setWinner(winStatus);
  }

  const handleMove = (i, right, left, top, bottom) => {
    const newBoard = [...board];
    if (right && newBoard[right].num === 0) swap(newBoard, i, right);
    if ((left || left === 0) && newBoard[left].num === 0) swap(newBoard, i, left);
    if ((top || top === 0) && newBoard[top].num === 0) swap(newBoard, i, top);
    if (bottom && newBoard[bottom].num === 0) swap(newBoard, i, bottom);
    setBoard(newBoard);
    setSteps(steps + 1);
    checkWinner();
  };

  const handleShuffle = () => {
    setBoard(shuffle(reset()));
    setWinner(false);
    setSteps(0);
  }

  const handleSolve = () => {
    setBoard(reset());
    setWinner(false);
    setSteps(0);
  };

  return (
    <>
      <div className='btns'>
        <span className='btn' onClick={handleShuffle}>
          shuffle
        </span>
        <span className='spacer'></span>
        <span className='btn' onClick={handleSolve}>
          solve
        </span>
      </div>
      <div className='board'>
        {board.map((s, i) => (
          <Square
            key={s.num}
            index={i}
            x={s.x}
            y={s.y}
            num={s.num === 0 ? '' : s.num}
            white={s.num === 0 ? 'white' : ''}
            move={handleMove}
          />
        ))}
      </div>
      {winner && steps > 5 && <div className='winner'>Winner!</div>}
      {winner && steps <= 5 && <div className='cheat'>Don't cheat!</div>}
    </>
  );
}

export default Board
