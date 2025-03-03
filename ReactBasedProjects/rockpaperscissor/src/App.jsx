import React, { useState } from "react";
import './App.css';

const RockPaperScissors = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("Let's Play!");

  const choices = ["rock", "paper", "scissor"];

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    let outcome = "";

    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);

    if (playerChoice === computerChoice) {
      outcome = "It's a Tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      outcome = `You Win! ${playerChoice} beats ${computerChoice}`;
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      outcome = `You Lose! ${computerChoice} beats ${playerChoice}`;
      setComputerScore((prevScore) => prevScore + 1);
    }

    setResult(outcome);
  };

  return (
    <div className="container">
      <h1>Rock Paper Scissors Game</h1>
      <h2>Choose your move:</h2>

      <div className="Buttons">
        <div className="Rock-container">
          <button id="rock" onClick={() => playGame("rock")}>👊</button>
        </div>
        <div className="Paper-container">
          <button id="paper" onClick={() => playGame("paper")}>🖐</button>
        </div>
        <div className="Scissor-container">
          <button id="scissor" onClick={() => playGame("scissor")}>✌</button>
        </div>
      </div>
      <h4 id="result">{result}</h4>
      <h3 id="player">Player Score: <span id="pl1">{playerScore}</span></h3>
      <h3 id="computer">Computer Score: <span id="pl2">{computerScore}</span></h3>
    </div>
  );
};

export default RockPaperScissors;
