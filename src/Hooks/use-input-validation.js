import { useState, useRef } from "react";
const useInputValidation = (validityChecker) => {
  const inputValueRef = useRef();
  const [enteredValue, setEnteredValue] = useState("");
  const valueIsValid = validityChecker(enteredValue);
  const [valueWasTouched, setValueWasTouched] = useState(false);
  const valueBlurHandler = () => {
    setValueWasTouched(true);
  };
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const valueErrorDisplay = valueWasTouched && !valueIsValid;

  return [
    inputValueRef,
    enteredValue,
    valueIsValid,
    valueErrorDisplay,
    valueChangeHandler,
    valueBlurHandler,
  ];
};
export default useInputValidation;
