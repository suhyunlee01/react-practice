import Players from "./components/players";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  let handleSelectSquare = () => {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="P1" symbol="X" isActive={activePlayer === "X"} />
          <Players name="P2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayer={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
