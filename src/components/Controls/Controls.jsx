import React, { memo } from 'react';
import './Controls.css';

export const Controls = memo(({ onStart, onWait, onReset }) => {
  return (
    <div className="controls">
      <button className="button wait" onClick={onWait}>Wait</button>
      <button className="button start" onClick={onStart}>Start / Stop</button>
      <button className="button reset" onClick={onReset}>Reset</button>
    </div>
  )
})
