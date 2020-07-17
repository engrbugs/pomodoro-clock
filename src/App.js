import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

function SetTimer(props) {
  return (
    <div className="timer-container">
      <h2>{props.title}</h2>
      <div className="flex actions-wrapper">
        <button onClick={props.handleDecrease}>
          <i className="fas fa-minus" />
        </button>
        <span>{props.count}</span>
        <button onClick={props.handleDecrease}>
          <i className="fas fa-plus" />
        </button>
      </div>
    </div>
  );
}

function App() {
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);
  const breakProps = {
    title: "Break Length",
    count: breakCount,
    // handleDecrease: this.handleBreakDecrease,
    // handleIncrease: this.handleBreakIncrease,
  };
  const sessionProps = {
    title: "Session Length",
    count: sessionCount,
    // handleDecrease: this.handleSessionDecrease,
    // handleIncrease: this.handleSessionIncrease,
  };
  return (
    <div>
      <div className="flex">
        <SetTimer {...breakProps} />
        <SetTimer {...sessionProps} />
      </div>
      <div className="clock-container">
        <h1>Session</h1>
        <span>25:00</span>
        <div className="flex">
          <button 
          // onClick={this.handlePlayPause}
          >
            <i className="fas fa-play" />
          </button>
          <button 
          // onClick={this.handleReset}
          >
            <i className="fas fa-sync" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
