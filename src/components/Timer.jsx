import { formatTime } from "@components/utils";
import React, { useState, useEffect, useRef } from "react";

const StopwatchTimer = ({
  interruptedNames,
  addLog,
  setCurrentPlayer,
  firstPlayer,
  currentPlayer,
}) => {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [interruptedName, setInterruptedName] = useState(firstPlayer);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  useEffect(() => {
    if (time === 60000) {
      clearInterval(intervalRef.current);
      setIsActive(false);
      setIsPaused(false);
      addLog(startTime, time, currentPlayer);
      alert("Time Over!");
    }
  }, [time]);

  if (isPaused)
    return (
      <div className='flex'>
        <div className='relative'>
          <input
            type='text'
            className='border border-gray-300 rounded py-2 px-3 text-lg text-center'
            value={interruptedName}
            onChange={(e) => setInterruptedName(e.target.value)}
            placeholder='Interrupted by/Next Player'
          />
          <div className='absolute top-full left-0 w-full bg-white rounded-b-md shadow-lg'>
            <ul className='border border-gray-200 rounded-t-md overflow-hidden'>
              {interruptedNames.map((name) => (
                <li
                  key={name}
                  className='px-3 py-2 cursor-pointer hover:bg-gray-100'
                  onClick={() => setInterruptedName(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type='button'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ml-4'
          onClick={() => {
            setCurrentPlayer(interruptedName);
            addLog(startTime, time, currentPlayer);
            setStartTime(time);
            setIsActive(true);
            handleResume();
          }}
        >
          Start for new Player
        </button>
      </div>
    );

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-4xl font-bold mb-4'>{formatTime(time)}</div>
      {!isActive && !isPaused ? (
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4'
          onClick={handleStart}
        >
          Start
        </button>
      ) : isPaused ? (
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
          onClick={handleResume}
        >
          Resume
        </button>
      ) : (
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
          onClick={handlePause}
        >
          Interrupt
        </button>
      )}
      {/* <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleReset}
      >
        Reset
      </button> */}
    </div>
  );
};

export default StopwatchTimer;
