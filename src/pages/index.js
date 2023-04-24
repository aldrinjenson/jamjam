import FinalScores from "@components/components/FinalScores";
import FirstCall from "@components/components/FirstCall";
import InputComponent from "@components/components/InputComponent";
import Logger from "@components/components/Logger";
import Navbar from "@components/components/Navbar";
import StopwatchTimer from "@components/components/Timer";
import { useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState("");
  const [currPlayer, setCurrPlayer] = useState(firstPlayer);
  const [scores, setScores] = useState([]);

  const addLog = (startTime, endTime, name) => {
    const logObj = { startTime, endTime, name };
    console.log(logObj);
    setScores((scores) => [...scores, logObj]);
  };

  return (
    <div className='container mx-auto px-4'>
      <Navbar />
      <InputComponent setPlayers={setPlayers} />
      <p>Players: {players.join(", ")}</p>
      <FirstCall
        players={players}
        setFirstPlayer={setFirstPlayer}
        setCurrPlayer={setCurrPlayer}
      />
      <p>Current Player: {currPlayer}</p>

      <StopwatchTimer
        interruptedNames={players}
        addLog={addLog}
        currentPlayer={currPlayer}
        setCurrentPlayer={setCurrPlayer}
      />
      <Logger logs={scores} />

      <FinalScores scores={scores} />
    </div>
  );
}
