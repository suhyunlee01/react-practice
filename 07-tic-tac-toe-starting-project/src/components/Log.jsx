export default function Log(props) {
  let { gameTurns } = props;
  return (
    <ol id="log">
      {gameTurns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row + 1}, {turn.square.col + 1}
          </li>
        );
      })}
    </ol>
  );
}
