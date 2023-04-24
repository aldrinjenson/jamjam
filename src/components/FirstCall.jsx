import { useState } from "react";

const FirstCall = ({ players, setFirstPlayer, setCurrPlayer }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredPlayers = players.filter((player) =>
      player.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredPlayers);
  };

  const handleSelectPlayer = (player) => {
    setInputValue(player);
    setSuggestions([]);
    setFirstPlayer(player);
    setCurrPlayer(player);
  };

  return (
    <div className='w-full sm:w-1/2'>
      <label
        htmlFor='first-player-input'
        className='block text-sm font-medium text-gray-700'
      >
        First Player
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          type='text'
          name='first-player-input'
          id='first-player-input'
          value={inputValue}
          onChange={handleInputChange}
          autoComplete='off'
          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md'
          placeholder='Enter player name'
        />
        {suggestions.length > 0 && (
          <ul className='absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg'>
            {suggestions.map((player) => (
              <li
                key={player}
                className='px-3 py-2 cursor-pointer hover:bg-gray-100'
                onClick={() => handleSelectPlayer(player)}
              >
                {player}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FirstCall;
