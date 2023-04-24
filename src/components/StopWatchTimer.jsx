import { useState, useEffect } from "react";

const StopWatchTimer = ({ addLog,interruptedNames }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [interruptedName, setInterruptedName] = useState("");

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setIsPaused(false);
  };

  const stopTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused && time < 60000) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (time >= 60000) {
      setIsActive(false);
      setIsPaused(false);
      addLog(startTime, time, interruptedName);
      setStartTime(time)
      setIsPaused(false)
      setIsActive(true)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused, time, interruptedName]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-6xl font-medium mb-4'>
        {new Date(time).toISOString().substr(14, 5)}
      </div>
      <div className='flex space-x-4'>
        {!isActive && (
          <button
            type='button'
            className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300'
            onClick={startTimer}
          >
            Start
          </button>
        )}
        {isActive && !isPaused && (
          <button
            type='button'
            className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300'
            onClick={pauseTimer}
          >
            Pause
          </button>
        )}
        {isActive && isPaused && (
          <>
            <div className='relative'>
              <input
                type='text'
                className='border border-gray-300 rounded py-2 px-3 text-lg text-center'
                value={interruptedName}
                onChange={(e) => setInterruptedName(e.target.value)}
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
              onClick={() => addLog(time, interruptedName)}
            >
              Interrupt
            </button>
          </>
        )}
      </div>
    </div>
  );
};
{
  /* {isActive && (
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-color */
}


export default StopWatchTimer