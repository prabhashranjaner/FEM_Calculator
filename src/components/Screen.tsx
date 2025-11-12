import type { StateType } from "../types";

function numberWithCommas(value: string) {
  const integerDigits = parseFloat(value.split(".")[0]);
  const decimalDigits = value.split(".")[1];

  let integerDisplay: string;

  if (isNaN(integerDigits)) integerDisplay = "";
  else
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });

  if (decimalDigits !== undefined) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

const Screen = ({ state }: PropsType) => {
  const current = state.currentOperand
    ? numberWithCommas(state.currentOperand)
    : "";

  const prev = state.previousOperand
    ? numberWithCommas(state.previousOperand)
    : "";

  return (
    <div className="screen">
      <div className="screen__top">
        <span>{prev}</span> <span>{state.operation}</span>
      </div>
      <div className="screen__main">
        <p className="screen__value">{current}</p>
      </div>
    </div>
  );
};

export default Screen;

type PropsType = {
  state: StateType;
};
