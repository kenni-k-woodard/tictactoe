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

  const handleClick = (space) => {
    const newBoard = board.map((box) => {
      if (box.space === space && box.content === '' && active === true) {
        box.content = current;
        current === 'X' ? setCurrent('O') : setCurrent('X');
      }
      return box;
    });
    setBoard(newBoard);
    checkWin();
    kitten();
  };

  const checkWin = () => {
    if (
      (board[0].content === board[1].content) &
      (board[0].content !== '') &
      (board[0].content === board[2].content)
    )
      setActive(false) & alert(`${current} wins!`);
    if (
      (board[3].content === board[4].content) &
      (board[3].content !== '') &
      (board[3].content === board[5].content)
    )
      setActive(false) & alert(`${current} wins!`);
    if (
      (board[6].content === board[7].content) &
      (board[6].content !== '') &
      (board[6].content === board[8].content)
    )
      setActive(false) & alert(`${current} wins!`);
    if (
      (board[0].content === board[3].content) &
      (board[0].content !== '') &
      (board[0].content === board[6].content)
    )
      setActive(false) & alert(`${current} wins!`);
    if (
      (board[1].content === board[4].content) &
      (board[1].content !== '') &
      (board[1].content === board[7].content)
    )
      setActive(false) & alert(`${current} wins!`);
    if (
      (board[2].content === board[5].content) &
      (board[2].content !== '') &
      (board[2].content === board[8].content)
    )
      setActive(false) & alert(`${current} wins!`);
    if (
      (board[2].content === board[4].content) &
      (board[2].content !== '') &
      (board[2].content === board[6].content)
    )
      setActive(false) & alert(`${current} wins!`);
    if (
      (board[0].content === board[4].content) &
      (board[0].content !== '') &
      (board[0].content === board[8].content)
    )
      setActive(false) & alert(`${current} wins!`);
  };

  const kitten = () => {
    if (
      (board[0].content !== '') &
      (board[1].content !== '') &
      (board[2].content !== '') &
      (board[3].content !== '') &
      (board[4].content !== '') &
      (board[5].content !== '') &
      (board[6].content !== '') &
      (board[7].content !== '') &
      (board[8].content !== '') &
      setActive(true)
    )
      alert('No winners here!') & setActive(false);
  };

  const [current, setCurrent] = useState('X');
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState('');
  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        current,
        setCurrent,
        active,
        setActive,
        message,
        setMessage,
        handleClick,
        checkWin,
        kitten,
      }}
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
