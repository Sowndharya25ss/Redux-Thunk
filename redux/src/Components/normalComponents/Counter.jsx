import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    {
      count == 0 ? setCount(0) : setCount(count - 1);
    }
  };

  return (
    <>
      <div className="counter_container">
        <button onClick={increment} className="increase">
          +
        </button>
        <div className="counter_value">{count}</div>
        <button onClick={decrement} className="decrease">
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
