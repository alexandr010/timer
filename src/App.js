import React, { useState, useCallback } from "react";
import { interval } from "rxjs";
import { Controls } from "./components/Controls";

import "./App.css";

const delay = 1000;

function App() {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [prev, setPrev] = useState(0);
  const [subscriptions, setSubscriptions] = useState(null);

  const timerBody = (value) => {
    setPrev(value);
    const seconds = value % 60;
    const minutes = Math.floor((value % 3600) / 60);
    const hours = Math.floor(value / 3600);
    setTimer({
      seconds,
      minutes,
      hours,
    });
  };

  const runTimer = () => {
    if (!subscriptions) {
      const startTimer = interval(delay).subscribe((value) => {
        timerBody(value + prev);
      });
      setSubscriptions(startTimer);
    } else {
      subscriptions.unsubscribe();
      setTimer({
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      setSubscriptions(null);
    }
  };

  const pauseTimer = useCallback((event) => {
    if (event.detail === 2) {
      subscriptions.unsubscribe();
      setSubscriptions(null);
    }
  }, [subscriptions]);

  const resetTimer = useCallback(() => {
    subscriptions && subscriptions.unsubscribe();
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    const startTimer = interval(delay).subscribe((value) => {
      timerBody(value);
    });
    setSubscriptions(startTimer);
  }, [subscriptions]);

  const { hours, minutes, seconds } = timer;

  return (
    <div className="App">
      {hours < 10 ? `0${hours}` : hours}
      {" : "}
      {minutes < 10 ? `0${minutes}` : minutes}
      {" : "}
      {seconds < 10 ? `0${seconds}` : seconds}

      <Controls onStart={runTimer} onWait={pauseTimer} onReset={resetTimer} />
    </div>
  );
}

export default App;
