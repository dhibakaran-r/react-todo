import React, { useState } from "react";

const Test = () => {
  const [text, setText] = useState("Your text here");
  const [isEditable, setIsEditable] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
    // Add logic to save the edited text, if needed
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        disabled={!isEditable}
      />
      {isEditable ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default Test;
