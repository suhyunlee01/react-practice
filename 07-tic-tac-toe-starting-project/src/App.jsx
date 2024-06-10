import Players from "./components/players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="P1" symbol="X" />
          <Players name="P2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
