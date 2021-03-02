import { List, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const data = [
  <>
    Create a program that allows users to guess a string one character at a
    time.
  </>,
  <>
    If the user guess a character correctly reveal occurences of that character
    in that string.
  </>,
  <>Characters the user has not guessed should be represented by asterisks.</>,
  <>The user is given 5 incorrect guesses before it's Game Over.</>,
];

export const Problem: React.FC = () => {
  return (
    <>
      <Title level={2}>Problem Description</Title>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      ></List>
    </>
  );
};
