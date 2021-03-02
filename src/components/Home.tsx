import { Typography } from "antd";
import React from "react";

const { Paragraph, Title } = Typography;

export const Home: React.FC = () => {
  return (
    <>
      <Title>Home</Title>
      <Paragraph>
        Having a go at challenges from "The Little Book of Programming".
      </Paragraph>
    </>
  );
};
