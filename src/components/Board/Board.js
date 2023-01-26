import React from 'react';
import { useGameContext } from '../../context/GameContext.js';
import './Board.css';
import Box from '../Box/Box.js';

export default function Board() {
  const { board, setBoard } = useGameContext();

  return (
    <div className="board">
      {board.map((box) => (
        <Box key={box.space} />
      ))}
    </div>
  );
}
