export default function GameOver(props) {
  let { winner, handleRestart } = props;

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>Draw</p>}
      <p>
        <button onClick={handleRestart}>Restart</button>
      </p>
    </div>
  );
}
