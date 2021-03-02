import { Button, Typography } from "antd";
import React, { useContext, useState } from "react";

import { AlertContext } from "../../AlertContext";
import { alphabet } from "./alphabet";
import { censor } from "./censor";
import { randElem } from "./randElem";

const words = ["hello", "bye"];

const { Paragraph, Text } = Typography;

export const Game: React.FC = () => {
  const [word] = useState(randElem(words));

  const { setAlert } = useContext(AlertContext);

  const [lives, setLives] = useState(5);
  const [correctCharacters, setCorrectCharacters] = useState<string[]>([]);

  const [play, setPlay] = useState(true);

  // Checks if the number the user guessed is correct and acts accordingly.
  const checkLetter = (str: string) => {
    if (word.includes(str)) {
      setAlert((prevAlert: string[]) => [
        ...prevAlert,
        "You guessed correctly!",
      ]);

      // Adds the character to the list of correctly guessed characters.
      setCorrectCharacters((curCorrectCharacters) => [
        ...curCorrectCharacters,
        str,
      ]);
    } else {
      setAlert((prevAlert: string[]) => [...prevAlert, "Wrong, try again."]);

      // In correct choices lose a life.
      setLives((curLives) => curLives - 1);

      // If they run out of lives they lose.
      if (lives === 0) {
        setAlert((prevAlert: string[]) => [...prevAlert, "You lose!"]);
        setPlay(false);
      }
    }
  };

  // Magic Fuction
  const displayWord = () => {
    const magicWord = censor(word, correctCharacters);

    // Checks if the user has guessed all the words correctly.
    if (magicWord === word) {
      setAlert((prevAlert: string[]) => [...prevAlert, "You win!"]);
      setPlay(false);
    }

    return magicWord;
  };

  return (
    <>
      {play ? (
        <div style={{ textAlign: "center" }}>
          <Paragraph>{displayWord()}</Paragraph>
          <Paragraph>Your have {lives} lives remaining.</Paragraph>
          {alphabet.map((letter) => (
            <Button key={letter} onClick={() => checkLetter(letter)}>
              {letter}
            </Button>
          ))}
        </div>
      ) : (
        <Text>Reload the page to play again.</Text>
      )}
    </>
  );
};
