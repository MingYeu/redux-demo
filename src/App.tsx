import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./app/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Redux Counter Demo</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default App;
