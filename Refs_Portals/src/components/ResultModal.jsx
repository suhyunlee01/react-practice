import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeRemaining, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You {result}</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;