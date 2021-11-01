import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  function countDown() {
    setCount(count - 1);
  }
  return (
    <div>
      <p className="counter">{count}</p>
      <button className="counterBtn" onClick={() => countUp()}>
        +
      </button>
      <button className="counterBtn" onClick={() => countDown()}>
        -
      </button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Counter;
