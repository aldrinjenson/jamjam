import FinalScores from "@components/components/FinalScores";
import FirstCall from "@components/components/FirstCall";
import InputComponent from "@components/components/InputComponent";
import Logger from "@components/components/Logger";
import StopwatchTimer from "@components/components/Timer";
import { useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState("");
  const [currPlayer, setCurrPlayer] = useState("");
  const [scores, setScores] = useState([]);

  const addLog = (startTime, endTime, name) => {
    const logObj = { startTime, endTime, name };
    console.log(logObj);
    setScores((scores) => [...scores, logObj]);
  };
  console.log({ players });
  console.log(scores);

  return (
    <div className='container mx-auto px-4'>
      <InputComponent setPlayers={setPlayers} />
      <p>Players: {players.join(", ")}</p>
      <FirstCall
        players={players}
        setFirstPlayer={setFirstPlayer}
        setCurrPlayer={setCurrPlayer}
      />
      <p>First Player: {firstPlayer}</p>
      <p>Current Player: {firstPlayer}</p>

      <StopwatchTimer
        interruptedNames={players}
        addLog={addLog}
        currentPlayer={currPlayer}
        setCurrentPlayer={setCurrPlayer}
      />
      <Logger logs={scores} />

      <h2>Final Scores</h2>

      <FinalScores scores={scores} />
    </div>
  );
}
