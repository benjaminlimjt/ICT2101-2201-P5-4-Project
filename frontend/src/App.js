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

/* SAMPLE BACKEND FRONTEND DEMO 
import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default App;
END DEMO*/