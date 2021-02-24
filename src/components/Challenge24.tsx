import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Game } from "./challenge-24/Game";

export const Challenge24: React.FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <h1>Challenge 24</h1>
      <Switch>
        <Route path={`${match.path}/play`}>
          <Game />
        </Route>
        <Route path={match.path}>
          <>
            <Link to={`${match.url}/play`}>
              <button>Play</button>
            </Link>
            <h2>Problem Description</h2>
            <ol>
              <li>
                Create a program that allows users to guess a string one
                character at a time.
              </li>
              <li>
                If the user guess a character correctly reveal occurences of
                that character in that string.
              </li>
              <li>
                Characters the user has not guessed should be represented by
                asterisks.
              </li>
              <li>
                The user is given 5 incorrect guesses before it's Game Over.
              </li>
            </ol>
            <h2>Possible Solution</h2>
            <p>
              The main component in this will be a function that takes the
              correctly guessed letters and is able to reveal only the
              characters in a string that are in that list.
            </p>
            <h3>Pseudocode</h3>
            <ol>
              <li>
                Display the word using asterisks (done by the above mentioned
                magic function which takes the word you need to guess and a list
                of correctly guessed letters which is initially empty).
              </li>
              <li>
                Ask the user to click a character (characters will be displayed
                as a bunch of buttons).
              </li>
              <li>
                The button will call a function that checks if the character is
                in the string that the user is trying to guess.
              </li>
              <li>
                If it is, the function will add it to the array of correctly
                guessed words and then call the magic function which will update
                the word.
                <ol>
                  <li>
                    If all the words have been guessed correctly we will infom
                    the user that they have won the game.
                  </li>
                  <li>
                    Otherwise the program will call itself (asking the user for
                    to click a another character, etc...)
                  </li>
                </ol>
              </li>
              <li>
                Otherwise the program will inform the user that they had guessed
                incorrectly and decrement a life.
                <ol>
                  <li>
                    If the number of lives is 0 we display that they have lost
                    the game.
                  </li>
                  <li>Otherwise the program will ask the user to try again.</li>
                </ol>
              </li>
            </ol>
          </>
        </Route>
      </Switch>
    </>
  );
};
