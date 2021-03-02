import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Challenge24 } from "./components/Challenge24";
import { Home } from "./components/Home";
import { MyLayout } from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <MyLayout>
        <Switch>
          <Route path="/challenge-24">
            <Challenge24 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MyLayout>
    </Router>
  );
};

export default App;
