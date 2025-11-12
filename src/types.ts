export type StateType = {
  previousOperand: string;
  currentOperand: string;
  operation: string | null;
  answer: number;
};

export type ActionType =
  | {
      type: "reset";
    }
  | { type: "operand/update"; payload: string }
  | { type: "operation/update"; payload: string }
  | { type: "equate" };
