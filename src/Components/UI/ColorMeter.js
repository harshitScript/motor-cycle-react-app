import classes from "./ColorMeter.module.css";

const ColorMeter = () => {
  return (
    <div className={classes.colorMeterDiv}>
      <div className={classes.poor}>Poor</div>
      <div className={classes.average}>Average</div>
      <div className={classes.good}>Good</div>
      <div className={classes.veryGood}>Better</div>
      <div className={classes.best}>Best</div>
    </div>
  );
};
export default ColorMeter;
