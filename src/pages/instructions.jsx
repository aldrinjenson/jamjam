import Link from "next/link";
import React from "react";

const Instructions = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto max-w-lg py-10 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold text-center mb-8'>
        How to use this app to play JAM
      </h1>
      <div className='w-full md:w-3/4'>
        <ol className='list-decimal list-inside text-lg mb-8'>
          <li className='mb-4'>
            Enter the player names separated by comma in the input field and
            click the "Start Game" button.
          </li>
          <li className='mb-4'>
            Choose the first player and assign them a topic to speak about.
          </li>
          <li className='mb-4'>
            Hit the "Start Speaking" button once the player starts speaking.
          </li>
          <li className='mb-4'>
            If another player wishes to speak, they can hit the "Interrupt"
            button.
          </li>
          <li className='mb-4'>
            Enter the name of the new speaker in the input field and press
            "Interrupt" if the motion is passed. Otherwise, just select the name
            of the old speaker from the dropdown.
          </li>
          <li className='mb-4'>
            Logs of each speaker speaking - their start, end and total time
            duration spoken will be listed.
          </li>
          <li className='mb-4'>
            Final scores of each person will be shown in descending order as
            well.
          </li>
          <li>
            The game will stop at exactly 1 minute. To start a new game, simply
            refresh the page.
          </li>
        </ol>
        <Link
          href='/'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300'
        >
          Start Game
        </Link>
      </div>
    </div>
  );
};

export default Instructions;
