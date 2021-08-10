import classes from "./BikeAverageForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState } from "react";
import { useHistory, Prompt } from "react-router-dom";
import useInputValidation from "../../Hooks/use-input-validation";

const BikeAverageForm = (props) => {
  const history = useHistory();
  const [propmtDisplay, setPromptDisplay] = useState(false);

  const [
    totalDistanceRef,
    enteredTotalDistance,
    totalDistanceIsValid,
    totalDistanceErrorDisplay,
    totalDistanceChangeHandler,
    totalDistanceBlurHandler,
  ] = useInputValidation((value) => value.trim().length > 2);

  const [
    fuelUsedRef,
    enteredFuelUsed,
    fuelUsedIsValid,
    fuelUsedErrorDisplay,
    fuelUsedChangeHandler,
    fuelUsedBlurHandler,
  ] = useInputValidation((value) => value.trim().length >= 1 && value !== "0");

  //const dateObjectGenerator = () => {
  //  const date = new Date();
  //  return date;
  //};
  //const dateObj = dateObjectGenerator();

  const formIsValid = totalDistanceIsValid && fuelUsedIsValid;

  const bikeAverageGeneratorSubmitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      history.push(
        `/response-page/Bike-Average?TotalDistance=${enteredTotalDistance}&FuelUsed=${enteredFuelUsed}`
      );
    }
  };

  const promptAllowHandler = () =>{
    setPromptDisplay(true);
  }

  const promptDiscardHandler = () =>{
    setPromptDisplay(false);
  }

  return (
    <>
      {/* PROMPT COMPONENT ONLY EXECUTES WHEN WE TRY TO LEAVE THE PAGE */}
      <Prompt
        when={propmtDisplay}
        message={(location) => "Sure you wanna leave the form ?"}
      />

      <span className={classes.header}>Bike Average Generator</span>

      <form onFocus={promptAllowHandler} onSubmit={bikeAverageGeneratorSubmitHandler}>
        <Input
          onChange={totalDistanceChangeHandler}
          ref={totalDistanceRef}
          onBlur={totalDistanceBlurHandler}
          type="number"
          step="100"
          value={enteredTotalDistance}
          name="TotalDistance"
          placeholder="Enter total distance covered(in KM)"
          errorDisplay={totalDistanceErrorDisplay}
          errorMsg="Distance covered must be above 100Km"
        />
        <Input
          onChange={fuelUsedChangeHandler}
          ref={fuelUsedRef}
          onBlur={fuelUsedBlurHandler}
          type="number"
          value={enteredFuelUsed}
          name="FuelUsed"
          placeholder="Enter fuel Used"
          errorDisplay={fuelUsedErrorDisplay}
          errorMsg="Fuel used must not be less than 1 liter"
        />

        <Button onClick={promptDiscardHandler} type="submit" disabled={!formIsValid}>
          Generate
        </Button>
      </form>
    </>
  );
};
export default BikeAverageForm;
