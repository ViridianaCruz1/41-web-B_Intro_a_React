import { useState, useEffect } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

const Game = () => {
  const [randomNumber, setRandomNumber] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const generateRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  };

  useEffect(() => {
    generateRandom();
  }, []);

  const restartGame = () => {
    generateRandom();
    setUserNumber("");
  };

  return (
    <div>
      <h1>Practica Conditional Rendering y Components Composition</h1>
      <InputNumber userNumber={userNumber} setUserNumber={setUserNumber} />
      <Message randomNumber={randomNumber} userNumber={userNumber} />
      <RestartButton onRestart={restartGame} />
    </div>
  );
};

export default Game;
