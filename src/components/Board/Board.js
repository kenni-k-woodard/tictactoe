/* eslint-disable indent */
import React from 'react';
import { useGameContext } from '../../context/GameContext.js';
import './Board.css';
import Box from '../Box/Box.js';

export default function Board() {
  const { board, setActive, setCurrent, setBoard } = useGameContext();

  return (
    <div className="board">
      {board.map((box) => (
        <Box key={box.space} box={box} />
      ))}
      <button onClick={refresh}>REFRESH</button>
    </div>
  );

  function refresh() {
    setActive(true),
      setCurrent('X'),
      setBoard([
        { space: 0, content: '' },
        { space: 1, content: '' },
        { space: 2, content: '' },
        { space: 3, content: '' },
        { space: 4, content: '' },
        { space: 5, content: '' },
        { space: 6, content: '' },
        { space: 7, content: '' },
        { space: 8, content: '' },
      ]);
  }
}
