import { useState } from "react";

export default function Player({ initialName, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditButton() {
    setIsEditing(editValue=>!editValue);
  }

  const [name, setName] = useState(initialName);
  function handleInputChange(event){
    setName(event.target.value)
  }

  let buttonValue = "Edit";
  let playerSpan = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerSpan = <input type="text" required value={name} onChange={handleInputChange}/>;
    buttonValue = "Save";
  } else {
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}> {buttonValue}</button>
    </li>
  );
}
