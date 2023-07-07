import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  const incBy = () => {
    dispatch({ type: "incBy", payload: 10 });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter}</p>
        <div className="">
          <button onClick={increment}>INC</button>
          <button onClick={decrement}>DEC</button>
          <button onClick={incBy}>Increment By 10</button>
        </div>
      </header>
    </div>
  );
}

export default App;
