import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Pros" targetTime={1} />
        <TimerChallange title="Hard" targetTime={5} />
        <TimerChallange title="Not Easy" targetTime={10} />
        <TimerChallange title="Easy" targetTime={15} />
      </div>
    </>
  );
}

export default App;
