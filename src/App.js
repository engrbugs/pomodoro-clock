import React from "react";
import logo from "./logo.svg";
import "./App.css";

function SetTimer() {
  return (
    <div className="time-container">
      <h1>Break Time</h1>
      <div>
        <button>
          <i className="fas fa-minus" />
        </button>
        <span>5</span>
        <button>
          <i className="fas fa-plus" />
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div><SetTimer /></div>
    </div>
  );
}

export default App;
