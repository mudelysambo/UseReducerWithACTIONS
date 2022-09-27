import { useState, useReducer } from "react";
import "./styles.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <button onClick={increment}>increment</button>
      <span>{state.count}</span>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
