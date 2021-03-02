import { List, Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

const data = [
  {
    title: <>OUTPUT 'Guess a character!'</>,
    description: <>Prompts the user to click a Character.</>,
  },
  {
    title: <>OUTPUT magic(word, correctChars)</>,
    description: (
      <>
        Display the word using asterisks. This is done by a magic function which
        takes the word you need to guess and a list of your correctly guessed
        letters as arguements.
      </>
    ),
  },
  {
    title: (
      <>
        DISPLAY ALPHABET AS BUTTON WHERE ONCLICK VALUE AS letter CALLS
        update(word, letter)
      </>
    ),
    description: (
      <>
        Letters of the alphabet will be displayed as buttons. The button will
        call a function that checks if the character is in the string that the
        user is trying to guess.
      </>
    ),
  },
  {
    title: (
      <>
        FUNCTION update(word, letter) RETURNS (letter IN word) THEN (ADD letter
        TO correctChars AND UPDATE) ELSE (lives MINUS 1)
      </>
    ),
    description: (
      <>
        If the guessed is in the word, the function will add it to the array of
        correctly guessed words and then call the magic function which will
        update the word.
        <ol>
          <li>
            If all the words have been guessed correctly we will infom the user
            that they have won the game.
          </li>
          <li>
            Otherwise the program will call itself (asking the user for to click
            a another character, etc...)
          </li>
        </ol>
        Otherwise the program will inform the user that they had guessed
        incorrectly and decrement a life.
        <ol>
          <li>
            If the number of lives is 0 we display that they have lost the game.
          </li>
          <li>Otherwise the program will ask the user to try again.</li>
        </ol>
      </>
    ),
  },
];

export const Solution: React.FC = () => {
  return (
    <>
      <Title level={2}>Possible Solution</Title>
      <Text>
        The main component in this will be a function that takes the correctly
        guessed letters and is able to reveal only the characters in a string
        that are in that list.
      </Text>
      <Title level={3}>Pseudocode</Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      ></List>
    </>
  );
};
