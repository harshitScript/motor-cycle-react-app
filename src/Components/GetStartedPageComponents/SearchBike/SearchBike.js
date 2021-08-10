import classes from "./SearchBike.module.css";
import { useSelector, useDispatch } from "react-redux";
import BikeDetails from "./BikeDetails";
import { useEffect } from "react";
import Button from "../../UI/Button";
import bikeDataFectherThunk from "../../../ReduxStore/ThunkFunctionStore";
import Input from "../../UI/Input";
import { bikeSliceActions } from "../../../ReduxStore/bikeDataSlice";

const SearchBike = (props) => {
  const [bikeData, bikeSearchList, isLoading, error] = useSelector((state) => [
    state.bikeData,
    state.bikeSearchList,
    state.isLoading,
    state.error,
  ]);

  const dispatch = useDispatch();

  const refreshHandler = () => {
    dispatch(bikeDataFectherThunk());
  };

  useEffect(() => {
    dispatch(bikeDataFectherThunk());
  }, [dispatch]);

  const bikeSearchHandler = (e) => {
    dispatch(
      bikeSliceActions.bikeSearchListSetter(
        bikeData.filter((singleObj) =>
          singleObj.bikeName.includes(e.target.value)
        )
      )
    );
  };

  let content = (
    <>
      <Input
        onChange={bikeSearchHandler}
        type="text"
        placeholder="Enter bike name"
      />
      {bikeSearchList.map((singleBikeObj) => (
        <BikeDetails
          key={singleBikeObj.id}
          id={singleBikeObj.id}
          src={singleBikeObj.src}
          bikeName={singleBikeObj.bikeName}
          releaseYear={singleBikeObj.releaseYear}
        />
      ))}
      
    </>
  );

  if (isLoading) {
    content = (
      <div className={classes.loadingSpinnerDiv}>
        <i className="fa fa-life-ring fa-spin"></i>
      </div>
    );
  }

  if (error) {
    content = (
      <div className={classes.errorDiv}>
        <p>Unknown error occured :(</p>
        <Button type="button" onClick={refreshHandler}>
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <>
      <span className={classes.header}>Bike Search</span>
      {content}
    </>
  );
};
export default SearchBike;
