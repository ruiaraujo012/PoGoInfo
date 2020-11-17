import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Navbar from "components/navbar/Navbar";
import { Typography } from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Typography variant="h4">PoGoInfo are greate!</Typography>
          </Route>
          <Route path="/raids">
            <Typography variant="h4">Raids</Typography>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
