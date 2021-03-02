import { Button, Divider, Typography } from "antd";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { Game } from "./challenge-24/Game";
import { Problem } from "./challenge-24/Problem";
import { Solution } from "./challenge-24/Solution";

const { Title } = Typography;

export const Challenge24: React.FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Title>Challenge 24</Title>
      <Switch>
        <Route path={`${match.path}/play`}>
          <Game />
        </Route>
        <Route path={match.path}>
          <>
            <Link to={`${match.url}/play`}>
              <Button>Play</Button>
            </Link>
            <Divider />
            <Problem />
            <Divider />
            <Solution />
          </>
        </Route>
      </Switch>
    </>
  );
};
