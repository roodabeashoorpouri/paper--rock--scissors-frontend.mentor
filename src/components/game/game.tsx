import React, { useState } from "react";
import "./game.css";
// import triangle from "../../assets/images/bg-triangle.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";

const options = ["paper", "rock", "scissors"];

const Game = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (choice: string) => {
    setUserChoice(choice);
    const computerRandomChoice =
      options[Math.floor(Math.random() * options.length)];
    setComputerChoice(computerRandomChoice);

    if (
      (choice === "paper" && computerRandomChoice === "rock") ||
      (choice === "rock" && computerRandomChoice === "scissors") ||
      (choice === "scissors" && computerRandomChoice === "paper")
    ) {
      setResult("YOU WIN");
    } else {
      setResult("YOU LOSE");
    }
  };

  const playAgain = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };
  const getImageSrc = (choice: string) => {
    switch (choice) {
      case "paper":
        return paper;
      case "rock":
        return rock;
      case "scissors":
        return scissors;
      default:
        return "";
    }
  };

  return (
    <main>
      <nav className={`${result ? "result-hidden" : ""}`}>
        <div className='game'>
          <div className={`grid ${result ? "result-hidden" : ""}`}>
            <button
              className={`paper circle ${
                userChoice === "paper" ? "selected" : ""
              }`}
              onClick={() => handleClick("paper")}
            >
              <img src={paper} alt='paper' />
            </button>
          </div>
          <div className={`grid change ${result ? "result-hidden" : ""}`}>
            <button
              className={`rock circle ${
                userChoice === "rock" ? "selected" : ""
              }`}
              onClick={() => handleClick("rock")}
            >
              <img src={rock} alt='rock' />
            </button>
          </div>
          <div className={`grid by ${result ? "result-hidden" : ""}`}>
            <button
              className={`scissors circle ${
                userChoice === "scissors" ? "selected" : ""
              }`}
              onClick={() => handleClick("scissors")}
            >
              <img src={scissors} alt='scissors' />
            </button>
          </div>
        </div>
      </nav>
      <div>
        {result && (
          <div className='game'>
            <h1>{result}</h1>
            <div className='choices'>
              <h2>You Picked</h2>
              <div
                className={`circle-result 
                ${userChoice === "rock" ? "rock" : ""}
                 ${userChoice === "paper" ? "paper" : ""}
                ${userChoice === "scissors" ? "scissors" : ""}
                `}
              >
                <img
                  src={getImageSrc(userChoice)}
                  alt={userChoice}
                  className='choice-image'
                />
              </div>
              <h2>The house picked</h2>
              <div
                className={`circle-result 
                ${computerChoice === "rock" ? "rock" : ""}
                 ${computerChoice === "paper" ? "paper" : ""}
                ${computerChoice === "scissors" ? "scissors" : ""}
                `}
              >
                <img
                  src={getImageSrc(computerChoice)}
                  alt={computerChoice}
                  className='choice-image'
                />
              </div>
            </div>
          </div>
        )}
        {result && (
          <button className='btn-again' onClick={playAgain}>
            PLAY AGAIN
          </button>
        )}
      </div>
    </main>
  );
};

export default Game;
