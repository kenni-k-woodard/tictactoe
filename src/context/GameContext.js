import { createContext, useContext, useState } from 'react';
const GameContext = createContext();
const GameProvider = ({ children }) => {
  // in here we can define any state variables we want to use
  const [board, setBoard] = useState();

  return <GameContext.Provider value={{ board, setBoard }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext };
