import { useLocation } from "react-router";
import classes from "./BikeHealthResponse.module.css";
import ColorMeter from "../UI/ColorMeter";
const BikeHealthResponse = (props) => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const bikeName = queryParams.get("BikeName");
  const purchaseYear = queryParams.get("BikePurchaseYear");
  const distance = queryParams.get("BikeDistanceKm");
  const average = +queryParams.get("CurrentAverage");
  let bikeHealth;

  if (average > 90) {
    bikeHealth = "Best";
  }
  if (average > 75 && average <= 90) {
    bikeHealth = "Better";
  }
  if(average > 65 && average <= 75){
      bikeHealth = "Good";
  }
  if(average > 35 && average <= 65){
      bikeHealth = "Average";
  }
  if(average <= 35){
      bikeHealth = "Poor";
  }

  return (
    <>
      
      <ColorMeter />

      {/* Bike health */}
      <span className={classes.bikeHealthSpan}>{bikeHealth}</span>

      {/* Bike details */}
      <span className={classes.detailSpan}>{`Bike Name : ${bikeName}`}</span>
      
      <span
        className={classes.detailSpan}
      >{`Purchase Year : ${purchaseYear}`}</span>
      
      <span
        className={classes.detailSpan}
      >{`Distance(in Km) : ${distance}`}</span>
      
      <span className={classes.detailSpan}>{`Average : ${average}`}/kmpl</span>
    </>
  );
};
export default BikeHealthResponse;
