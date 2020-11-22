import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";

import Navbar from "components/navbar/Navbar";
import HomePage from "components/homePage/HomePage";
import NotFound from "components/notFound/NotFound";
import RaidsPage from "components/raidsPage/RaidsPage";
import AboutUs from "components/aboutUs/AboutUs";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/raids" component={RaidsPage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/pageNotFound" component={NotFound} />
          <Redirect to="/pageNotFound" />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
