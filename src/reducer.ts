import type { ActionType, StateType } from "./types";

export const initialState: StateType = {
  previousOperand: "",
  currentOperand: "",
  operation: null,
  answer: 0,
};

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "operand/update": {
      return {
        ...state,
        currentOperand: action.payload,
      };
    }

    case "operation/update": {
      const { currentOperand, operation, previousOperand } = state;

      //! CASE 1: Can update operation without currentOperand
      if (currentOperand === "" && operation !== null) {
        return {
          ...state,
          operation: action.payload,
        };
      }

      //! CASE 2: But if there is opearion but no current operant return.
      if (currentOperand === "") return state;

      //! CASE 3: No previous operanr
      if (previousOperand === "")
        return {
          ...state,
          previousOperand: currentOperand,
          operation: action.payload,
          currentOperand: "",
        };

      //! Case 4: If Both are present : Calculate
      console.log({ previousOperand });
      const result: number | undefined = calculate(
        previousOperand,
        currentOperand,
        operation!
      );

      if (!result) return state;

      return {
        ...state,
        operation: action.payload,
        previousOperand: result.toString(),
        currentOperand: "",
      };
    }

    case "equate": {
      const { currentOperand, operation, previousOperand } = state;
      const result = calculate(previousOperand, currentOperand, operation!);

      if (result === undefined) return state;

      return {
        ...state,
        previousOperand: "",
        currentOperand: result.toString(),
        operation: null,
      };
    }

    case "reset":
      return { ...initialState };
    default:
      return state;
  }
}

function calculate(num1: string, num2: string, operation: string) {
  //! convert it to number;
  const prev = parseFloat(num1);
  const current = parseFloat(num2);

  //! If any value came out as NaN white conversion> Do not calculate
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      return prev + current;

    case "-":
      return prev - current;

    case "*":
      return prev * current;

    case "/":
      return prev / current;

    default:
      break;
  }
}
