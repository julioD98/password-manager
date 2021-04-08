import React from "react";
import { Route, Router, Switch } from "wouter";

import { Home } from "./Screens/Home";
import { NotFound } from "./Components/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
