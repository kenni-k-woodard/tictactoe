import React from 'react';
import './Box.css';
import { handleClick } from '../../context/GameContext.js';

export default function Box({ box }) {
  return (
    <div className="box" onClick={handleClick}>
      {box.content}
    </div>
  );
}
