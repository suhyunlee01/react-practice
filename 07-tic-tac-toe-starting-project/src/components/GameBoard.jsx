import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(props) {
  const { onSelectSquare, activePlayer } = props;
  const [gameBoardBtn, setgameBoardBtn] = useState(initialGameBoard);

  let handleSelectBtn = (rowIndex, colIndex) => {
    setgameBoardBtn((prevGameBoardBtn) => {
      const updatedBoardBtn = [
        ...prevGameBoardBtn.map((innerArray) => [...innerArray]),
      ];
      updatedBoardBtn[rowIndex][colIndex] = activePlayer;
      return updatedBoardBtn;
    });
    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoardBtn.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectBtn(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
