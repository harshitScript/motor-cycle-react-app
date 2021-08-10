import { useLocation } from 'react-router';
import classes from './BikeAverageResponse.module.css'
const BikeAverageResponse = (props) => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    
    const totalDistance = queryParams.get("TotalDistance");
    const fuelUsedInliter = queryParams.get("FuelUsed")
    
    const average = (totalDistance/fuelUsedInliter).toFixed(2);
  return (
    <>
      <span className={classes.firstSpan}>{average}</span>
      <span className={classes.secondSpan}>/KMPL</span>
    </>
  );
};
export default BikeAverageResponse;
