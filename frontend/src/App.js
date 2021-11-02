import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Game from "./components/Game/Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route key="home" path="/home" exact component={Home}></Route>

        <Route key="game" path="/game" exact component={Game}></Route>
      </Switch>
    </Router>
  );
}

export default App;
