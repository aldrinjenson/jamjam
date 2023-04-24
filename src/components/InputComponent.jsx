import { useState } from "react";

const InputComponent = ({ setPlayers }) => {
  const [playerInput, setPlayerInput] = useState("");

  const handleSave = () => {
    const playersArray = playerInput
      .split(",")
      .map(
        (name) => name.trim().charAt(0).toUpperCase() + name.trim().slice(1)
      );
    setPlayers(playersArray);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSave();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <label htmlFor='player-input' className='text-lg font-medium mb-2'>
        Enter player names separated by comma:
      </label>
      <input
        id='player-input'
        type='text'
        className='border border-gray-300 rounded py-2 px-3 text-lg text-center mb-2'
        value={playerInput}
        onChange={(e) => setPlayerInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type='button'
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300'
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default InputComponent;
