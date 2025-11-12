import { useReducer } from "react";
import "./app.css";
import Header from "./components/Header";
import KeyPad from "./components/KeyPad";
import { initialState, reducer } from "./reducer";
import Screen from "./components/Screen";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app__container">
      <Header />
      <Screen state={state} />
      <KeyPad state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
