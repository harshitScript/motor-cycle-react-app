import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={classes.buttonContainer}>
      <button type={props.type} onClick={props.onClick} disabled={props.disabled}>
        {props.children}
      </button>
    </div>
  );
};
export default Button;
