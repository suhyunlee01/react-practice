export default function EditableplayerName(props) {
  let { playerName, isEditing, handleChange } = props;

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={playerName}
          required
          onChange={handleChange}
        />
      ) : (
        <span className="player-name">{playerName}</span>
      )}
    </>
  );
}
