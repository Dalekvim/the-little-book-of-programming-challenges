import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Challenge24 } from "./components/Challenge24";
import { Home } from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/challenge-24">Challenge 24</Link>
          </li>
        </ul>
      </>

      <Switch>
        <Route path="/challenge-24">
          <Challenge24 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
