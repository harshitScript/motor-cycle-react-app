import classes from "./BikeHealthForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState } from "react";
import { useHistory , Prompt} from "react-router-dom";
import useInputValidation from "../../Hooks/use-input-validation";

const BikeHealthForm = (props) => {
  const history = useHistory();
  const [propmtDisplay, setPromptDisplay] = useState(false);

  const [
    bikeNameRef,
    enteredBikeName,
    bikeNameIsValid,
    bikeNameErrorDisplay,
    bikeNameChangeHandler,
    bikeNameBlurHandler,
  ] = useInputValidation((value) => value.trim().length > 4);

  const [
    bikePurchaseYearRef,
    enteredBikePurchaseYear,
    bikePurchaseYearIsValid,
    bikePurchaseYearErrorDisplay,
    bikePurchaseYearChangeHandler,
    bikePurchaseYearBlurHandler,
  ] = useInputValidation((value) => value.trim().length === 4);

  const [
    bikeDistanceKMRef,
    enteredBikeDistanceKM,
    bikeDistanceKMIsValid,
    bikeDistanceKMErrorDisplay,
    bikeDistanceKMChangeHandler,
    bikeDistanceKMBlurHandler,
  ] = useInputValidation((value) => value.trim().length > 2);

  const [
    bikeAverageRef,
    enteredBikeAverage,
    bikeAverageIsValid,
    bikeAverageErrorDisplay,
    bikeAverageChangeHandler,
    bikeAverageBlurHandler,
  ] = useInputValidation((value) => value.trim().length > 0);

  const dateObjectGenerator = () => {
    const date = new Date();
    return date;
  };
  const dateObj = dateObjectGenerator();

  const formIsValid =
    bikeNameIsValid &&
    bikePurchaseYearIsValid &&
    bikeDistanceKMIsValid &&
    bikeAverageIsValid;

  const bikeHealthGeneratorSubmitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      history.push(
        `/response-page/Bike-Health?BikeName=${enteredBikeName}&BikePurchaseYear=${enteredBikePurchaseYear}&BikeDistanceKm=${enteredBikeDistanceKM}&CurrentAverage=${enteredBikeAverage}`
      );
    }
  };

  const promptAllowHandler = () => {
    setPromptDisplay(true);
  };

  const promptDiscardHandler = () => {
    setPromptDisplay(false);
  };

  return (
    <>
      <Prompt
        when={propmtDisplay}
        message={(location) => "Sure you wanna leave the form ?"}
      />

      <span className={classes.header}>Bike Health Generator</span>

      <form
        onFocus={promptAllowHandler}
        onSubmit={bikeHealthGeneratorSubmitHandler}
      >
        <Input
          onChange={bikeNameChangeHandler}
          ref={bikeNameRef}
          onBlur={bikeNameBlurHandler}
          type="text"
          value={enteredBikeName}
          name="BikeName"
          placeholder="Enter Bike Name"
          errorDisplay={bikeNameErrorDisplay}
          errorMsg="Name Must contain atleast 5 characters."
        />
        <Input
          onChange={bikePurchaseYearChangeHandler}
          ref={bikePurchaseYearRef}
          onBlur={bikePurchaseYearBlurHandler}
          type="number"
          step="1"
          value={enteredBikePurchaseYear}
          name="YearBrought"
          min="1990"
          max={dateObj.getFullYear().toString()}
          placeholder="Enter Purchase Year"
          errorDisplay={bikePurchaseYearErrorDisplay}
          errorMsg="Year must be atleat 4 characters long."
        />
        <Input
          onChange={bikeDistanceKMChangeHandler}
          ref={bikeDistanceKMRef}
          onBlur={bikeDistanceKMBlurHandler}
          type="number"
          step="100"
          value={enteredBikeDistanceKM}
          name="RuntimeKM"
          placeholder="Enter Distance Covered(KM)"
          errorDisplay={bikeDistanceKMErrorDisplay}
          errorMsg="Bike should atleast covered 100KM"
        />

        <Input
          onChange={bikeAverageChangeHandler}
          ref={bikeAverageRef}
          onBlur={bikeAverageBlurHandler}
          type="number"
          step="10"
          value={enteredBikeAverage}
          name="Average"
          placeholder="Enter Current Average"
          errorDisplay={bikeAverageErrorDisplay}
          errorMsg="Enter a valid average"
        />

        <Button
          onClick={promptDiscardHandler}
          type="submit"
          disabled={!formIsValid}
        >
          Generate
        </Button>
      </form>
    </>
  );
};
export default BikeHealthForm;
