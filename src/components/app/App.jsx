import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";

import Navbar from "components/navbar/Navbar";
import HomePage from "components/homePage/HomePage";
import NotFound from "components/notFound/NotFound";

import { Typography } from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/raids">
          <Typography variant="h4">Raids</Typography>
        </Route>
        <Route path="/pageNotFound" component={NotFound} />
        <Redirect to="/pageNotFound" />
      </Switch>
    </div>
  );
};

export default App;
