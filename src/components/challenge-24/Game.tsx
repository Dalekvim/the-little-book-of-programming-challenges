import React, { useState } from "react";

const words = ["hello", "bye"];
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const randElem = (arr: string[]) => {
  if (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return "";
};

export const Game: React.FC = () => {
  const [word] = useState(randElem(words));

  const [alert, setAlert] = useState("Guess a character!");
  const [lives, setLives] = useState(5);
  const [correctCharacters, setCorrectCharacters] = useState<string[]>([]);
  const [play, setPlay] = useState(true);

  const checkLetter = (str: string) => {
    if (word.includes(str)) {
      setAlert("You guessed correctly!");
      setCorrectCharacters((curCorrectCharacters) => [
        ...curCorrectCharacters,
        str,
      ]);
    } else {
      setAlert("Wrong, try again.");
      setLives((curLives) => curLives - 1);
      if (lives === 0) {
        setAlert("You lose!");
        setPlay(false);
      }
    }
  };

  // Magic Fuction
  const displayWord = () => {
    const magicWord = word
      .split("")
      .reduce(
        (acc, cur) => (correctCharacters.includes(cur) ? acc + cur : acc + "*"),
        ""
      );

    if (magicWord === word) {
      setAlert("You win!");
      setPlay(false);
    }

    return magicWord;
  };

  return (
    <>
      {alert}
      {play ? (
        <>
          <p>{displayWord()}</p>
          <p>Your have {lives} lives remaining.</p>
          {alphabet.map((letter) => (
            <button key={letter} onClick={() => checkLetter(letter)}>
              {letter}
            </button>
          ))}
        </>
      ) : (
        <p>Reload the page to play again.</p>
      )}
    </>
  );
};
