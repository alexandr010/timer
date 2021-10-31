import React, {useState, useCallback} from 'react';
import './App.css';
import {Controls} from "./components/Controls";

function App() {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [intervalId, setIntervalId] = useState(null);

  const timerBody = () => {
    setTimer((current) => {
      let seconds = current.seconds + 1;
      let minutes = current.minutes;
      let hours = current.hours;

      if (seconds >= 60) {
        minutes = minutes + 1;
        seconds = 0;
      }

      if (minutes >= 60) {
        hours = hours + 1;
        minutes = 0;
      }

      return {
        hours,
        minutes,
        seconds,
      }
    });
  };

  const startTimer = useCallback(() => {
    const Id = setInterval(() => timerBody(), 1000);
    setIntervalId(Id);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(intervalId);
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    setIntervalId(null);
  }, [intervalId]);

  const runTimer = useCallback(() => {
    if (intervalId) {
      stopTimer();
    } else {
      startTimer();
    }
  }, [intervalId, stopTimer, startTimer]);


  const pauseTimer = useCallback((event) => {
    if (event.detail === 2 && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  const resetTimer = useCallback(() => {
    stopTimer();
    startTimer();
  }, [stopTimer, startTimer]);

  const {hours, minutes, seconds} = timer;

  return (
    <div className="App">
      {hours < 10 ? `0${hours}` : hours}
      {' : '}
      {minutes < 10 ? `0${minutes}` : minutes}
      {' : '}
      {seconds < 10 ? `0${seconds}` : seconds}

      <Controls
        onStart={runTimer}
        onWait={pauseTimer}
        onReset={resetTimer}
      />
    </div>
  );
}

export default App;
