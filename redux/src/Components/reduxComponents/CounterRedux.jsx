import React from "react";
import { useSelector, useDispatch } from "react-redux";
import counterSlice from "../../redux/counterSlice";
const actions = counterSlice.actions;

function Counter() {
  const count = useSelector((store) => store.counterState.count);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
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
