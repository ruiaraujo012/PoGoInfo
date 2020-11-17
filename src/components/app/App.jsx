import React from "react";
import "./App.scss";

import Navbar from "components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h2>PoGoInfo</h2>
      </header>
    </div>
  );
};

export default App;
