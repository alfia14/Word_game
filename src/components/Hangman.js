import React, { Component } from "react";
import { useState, useEffect } from "react";
import './styles.css'
// import { QiRoboService } from '../services/QIService';
import Popup from "./Popup";
import words from "./words";




// const handleDialogue = (text) => {
//   QiRoboService.onService("ALTextToSpeech", (ALTextToSpeech) => {
//     ALTextToSpeech.say(text);
//   });
// }

const Hangman = () => {
  const [mistake, setMistake] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [popup, setPopup] = useState(false);
  

  useEffect(() => {
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, []);

  // useEffect(() => {
  //     handleDialogue(words[currentQuestion].hint);
  //   }, [currentQuestion]);

  const guessedWord = () => {
    return words[currentQuestion].word.split("").map((bingo) => (guessed.has(bingo) ? bingo : "_"));
  };

  const handleGuess = (value) => {
    let letter = value;
    // handleDialogue(letter);
    
    setGuessed((prevGuessed) => new Set(prevGuessed.add(letter)));
    setMistake((prevMistake) =>
      prevMistake + (words[currentQuestion].word.includes(letter) ? 0 : 1)
    );
  };
  const keyPress = (event) => {
    if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122)
    ) {
      // handleGuess(event.key);
    } else if (
      event.keyCode === 8 ||
      event.keyCode === 13 ||
      event.keyCode === 32
    ) {
      resetButton();
    }
  };


  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={(e) => handleGuess(e.target.value)}
        disabled={guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  };

  const resetButton = () => {
    setMistake(0);
    setGuessed(new Set());
    if (currentQuestion !== words.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
    }
  
    if (currentQuestion === words.length - 1) {
      setPopup(true);
    }

  };

  const maxWrong = 6;
  // const images = [step0, step1, step2, step3, step4, step5, step6];
  const altText = `${mistake}/${maxWrong} wrong guesses`;
  const isWinner = guessedWord().join("") === words[currentQuestion].word;
  let gameStat = generateButtons();
  const gameOver = mistake >= maxWrong;

  if (isWinner) {
    gameStat = "YOU WON";
    //  handleDialogue("Congratulations. You guessed it right.");
  }

  if (mistake >= maxWrong) {
    gameStat = "YOU LOST";
    //  handleDialogue("Oops! No problem. Better Luck Next Time!");
  }

  return (
    <div className="Hangman-container">
    <div className="Hangman">
      <nav className="Hangman-nav">
        <span className="Hangman-guessed-wrong">
          Guessed wrong: {mistake}/6
        </span>
      </nav>
      {/* <p className="Hangman-image">
        <img src={images[mistake]} alt={altText} />
      </p> */}
      <p className="Hangman-hint">{words[currentQuestion].hint}</p>
      <p className="Hangman-word">
        {!gameOver ? guessedWord() : words[currentQuestion].word}
      </p>
      <p className="Hangman-status">{gameStat}</p>
      <div className="Hangman-reset-container">
        <button className="Hangman-reset" onClick={resetButton}>
          Next
        </button>
      </div>
      {popup && <Popup />}
    </div>
  </div>
  
  );
};

export default Hangman;