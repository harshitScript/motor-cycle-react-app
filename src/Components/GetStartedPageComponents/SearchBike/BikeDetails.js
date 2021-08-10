import classes from "./BikeDetails.module.css";
import { useHistory } from "react-router-dom";
const BikeDetails = (props) => {
    const history = useHistory();

    const bikeDescriptionLoader = () =>{
        console.log("Bike description page loading");
        history.push(`/bike-description/${props.id}`)
    }
  return (
    <div onClick={bikeDescriptionLoader} className={classes.bikeDetailsContainer}>
      <div className={classes.divFirstChild}>
        <img src={props.src} width="90%" alt={`${props.bikeName} bike.`}/>
      </div>

      <div className={classes.divSecondChild}>
        <div className={classes.bikeName}>{props.bikeName}</div>
        <span>{`Release Year : ${props.releaseYear}`}</span>
      </div>
    </div>
  );
};
export default BikeDetails;
