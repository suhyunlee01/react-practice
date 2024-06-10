import { useState } from "react";
import EditableplayerName from "./EditablePlayerName";
import Button1 from "./buttons/button1";

export default function Players(props) {
  const { name, symbol } = props;
  const [playerName, setPlayerName] = useState(
    localStorage.getItem(name + "playerName")
      ? localStorage.getItem(name + "playerName")
      : name
  );
  const [isEditing, setIsEditing] = useState(false);
  const [btnContents, setBtnContents] = useState("Edit");

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => {
      const newIsEditing = !prevIsEditing;
      setBtnContents(newIsEditing ? "Save" : "Edit");
      localStorage.setItem(name + "playerName", playerName);
      return newIsEditing;
    });
    console.log(isEditing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <li>
        <span className="player">
          <EditableplayerName
            playerName={playerName}
            isEditing={isEditing}
            handleChange={handleChange}
          />
          <span className="player-symbol">{symbol}</span>
        </span>
        <Button1 contents={btnContents} handleEditClick={handleEditClick} />
      </li>
    </>
  );
}
