import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h1>hello im a counter {counter}</h1>
      <button onClick={() => dispatch(increament(5))}>Add +</button>
      <button onClick={() => dispatch(decreament())}>sub -</button>
      {isLogged ? <h3>online</h3> : <h3>offline</h3>}
    </>
  );
}

export default App;
