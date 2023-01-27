import { createContext, useContext, useState } from 'react';
const GameContext = createContext();
const GameProvider = ({ children }) => {
  // in here we can define any state variables we want to use
  const [board, setBoard] = useState([
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
  const [current, setCurrent] = useState('X');
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState('');
  return (
    <GameContext.Provider
      value={{ board, setBoard, current, setCurrent, active, setActive, message, setMessage }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext };

export function handleClick() {
  console.log('click!');
}
