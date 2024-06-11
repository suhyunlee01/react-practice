import { useState } from "react";
import EditablePlayerName from "./EditablePlayerName";
import Button1 from "./buttons/button1";

export default function Players(props) {
  const { name, symbol, isActive, onChangeName } = props;
  const [playerName, setPlayerName] = useState(
    sessionStorage.getItem(symbol) || name
  );
  const [isEditing, setIsEditing] = useState(false);
  const [btnContents, setBtnContents] = useState("Edit");

  const handleEditClick = () => {
    if (isEditing) {
      sessionStorage.setItem(symbol, playerName);
      console.log(playerName);
      onChangeName(symbol, playerName);
    }

    setIsEditing((prevIsEditing) => {
      const newIsEditing = !prevIsEditing;
      setBtnContents(newIsEditing ? "Save" : "Edit");
      return newIsEditing;
    });
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player-symbol">{symbol}</span>
      <span className="player">
        <EditablePlayerName
          playerName={playerName}
          isEditing={isEditing}
          handleChange={handleChange}
        />
      </span>
      <Button1 contents={btnContents} handleEditClick={handleEditClick} />
    </li>
  );
}
