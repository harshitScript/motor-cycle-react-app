import { bikeSliceActions } from "./bikeDataSlice";
import axios from "axios";
const bikeDataFectherThunk = () =>{
    return (dispatch) => {
        dispatch(bikeSliceActions.setIsLoadingTrue());
        axios
          .get(
            "https://motor-cycle-app-7aff6-default-rtdb.firebaseio.com/bike-data.json"
          )
          .then((responseObj) => {
            dispatch(bikeSliceActions.setIsLoadingFalse())
            dispatch(bikeSliceActions.bikeDataChanger(responseObj.data));
            dispatch(bikeSliceActions.setErrorFalse());
          })
          .catch((error) => {
            dispatch(bikeSliceActions.setIsLoadingFalse())
            dispatchEvent(bikeSliceActions.setErrorTrue())
          });
      }
}
export default bikeDataFectherThunk;