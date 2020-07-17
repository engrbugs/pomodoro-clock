import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const [clockCount, setClockCount] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState("Session");
  const [isPlaying, setIsPlaying] = useState(false);
  var [loop, setLoop] = useState(undefined);

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

  function convertToTime(count) {
    const minutes = Math.floor(count / 60);
    const seconds =
      ("" + (count % 60)).length === 1 ? "0" + (count % 60) : "" + (count % 60);
    return `${minutes}:${seconds}`;
  }

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setClockCount((clockCount) => clockCount - 1);
      }, 1000);
    } else if (!isPlaying && clockCount !== 0) {
      clearInterval(interval);
    }

    // returned function will be called on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, clockCount]);

  return (
    <div>
      <div className="flex">
        <SetTimer {...breakProps} />
        <SetTimer {...sessionProps} />
      </div>
      <div className="clock-container">
        <h1>{currentTimer}</h1>
        <span>{convertToTime(clockCount)}</span>
        <div className="flex">
          <button onClick={handlePlayPause}>
          <i className={`fas fa-${isPlaying?'pause':'play'}`} />
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
