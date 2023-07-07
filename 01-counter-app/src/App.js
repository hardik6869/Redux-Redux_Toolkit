import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incBy } from "./counter/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter}</p>
        <div className="">
          <button onClick={() => dispatch(increment())}>INC</button>
          <button onClick={() => dispatch(decrement())}>DEC</button>
          <button onClick={() => dispatch(incBy(10))}>Increment By 10</button>
        </div>
      </header>
    </div>
  );
}

export default App;
