import classes from "./HomePage.module.css";
import { useHistory } from "react-router";
const HomePage = (propd) => {
  const history = useHistory();

  const getStartedHandler = () => {
    history.replace("/get-started-page");
  };

  return (
    <>
      <div className={classes.mainHeaderConatiner}>
        <span>Your Two Wheel Solution</span>
      </div>

      <div className={classes.subHeaderConatiner}>
        <span>
          Bike
          Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Average-Counter
        </span>
      </div>

      <div className={classes.buttonContainer}>
        <button onClick={getStartedHandler}>Get started</button>
      </div>

      <div className={classes.footerContainer}>
        <span>@2021 Moto comp pvt. ltd.</span>
      </div>
    </>
  );
};
export default HomePage;
