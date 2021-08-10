import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.inputConatiner}>
      <input
        ref={props.ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        name={props.name}
        step={props.step}
        placeholder={props.placeholder}
      />
      {props.errorDisplay && <span>{props.errorMsg}</span>}
    </div>
  );
};
export default Input;
