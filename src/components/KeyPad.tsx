import type { Dispatch, MouseEvent } from "react";
import type { ActionType, StateType } from "../types";

const KeyPad = ({ state, dispatch }: PropsType) => {
  const { currentOperand } = state;

  function handleNumberClick(e: MouseEvent<HTMLElement>) {
    const numberClicked = e.currentTarget.textContent;
    // ! If Decimal is clicked
    if (numberClicked === "." && currentOperand.includes(".")) return;

    dispatch({
      type: "operand/update",
      payload: state.currentOperand + numberClicked,
    });
  }

  function handleOperation(e: MouseEvent<HTMLElement>) {
    const textContent = e.currentTarget.textContent;
    const choosedOperation = textContent === "x" ? "*" : textContent;
    dispatch({ type: "operation/update", payload: choosedOperation });
  }

  function handleDelete() {
    if (state.currentOperand === "") return;
    const newCurrentOperand = state.currentOperand.slice(0, -1);
    dispatch({ type: "operand/update", payload: newCurrentOperand });
  }

  function handleEqual() {
    dispatch({ type: "equate" });
  }

  return (
    <div className="keypad">
      <button className="key" onClick={handleNumberClick}>
        7
      </button>
      <button className="key" onClick={handleNumberClick}>
        8
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        9
      </button>{" "}
      <button className="key key-gray" onClick={handleDelete}>
        DEL
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        4
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        5
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        6
      </button>{" "}
      <button className="key" onClick={handleOperation}>
        +
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        1
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        2
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        3
      </button>{" "}
      <button className="key" onClick={handleOperation}>
        -
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        .
      </button>{" "}
      <button className="key" onClick={handleNumberClick}>
        0
      </button>{" "}
      <button className="key" onClick={handleOperation}>
        /
      </button>{" "}
      <button className="key" onClick={handleOperation}>
        x
      </button>{" "}
      <button
        className="key span-2 key-gray"
        onClick={() => dispatch({ type: "reset" })}
      >
        RESET
      </button>{" "}
      <button className="key span-2 key-equal" onClick={handleEqual}>
        =
      </button>
    </div>
  );
};

export default KeyPad;

type PropsType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};
