import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState(0);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Data: {data.data}</p>
      </header>
    </div>
  );
}

export default App;
