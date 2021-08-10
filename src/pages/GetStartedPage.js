import BikeHealthForm from "../Components/GetStartedPageComponents/BikeHealthForm";
import Card from "../Components/UI/Card";
import BikeAverageForm from "../Components/GetStartedPageComponents/BikeAverageForm";
import classes from "./GetStartedPage.module.css";
import { useRouteMatch, Route, useHistory } from "react-router";
import SearchBike from "../Components/GetStartedPageComponents/SearchBike/SearchBike";
const GetStartedPage = (props) => {
  const match = useRouteMatch();

  const history = useHistory();

  const bikeHealthFormLoader = () => {
    history.push(`${match.path}/bike-health-form`);
  };

  const bikeAverageFormLoader = () => {
    history.push(`${match.path}/bike-average-form`);
  };

  const bikeSearchLoader = () => {
    history.push(`${match.path}/search-bike`);
  };

  return (
    <>
      <div className={classes.buttonContainer}>
        <button onClick={bikeHealthFormLoader}>Bike Health</button>
        <button onClick={bikeSearchLoader}>Search Bike</button>
        <button onClick={bikeAverageFormLoader}>Average-Counter</button>
      </div>

      <Card>
        <div className={classes.overflowController}>
          <Route path={match.path} exact>
            <span className={classes.header}>Select one of above Process</span>
          </Route>

          <Route path={`${match.path}/bike-health-form`} exact>
            <BikeHealthForm />
          </Route>

          <Route path={`${match.path}/bike-average-form`} exact>
            <BikeAverageForm />
          </Route>

          <Route path={`${match.path}/search-bike`} exact>
            <SearchBike />
          </Route>
        </div>
      </Card>

      <div className={classes.footerContainer}>
        <span>@2021 Moto comp pvt. ltd.</span>
      </div>
    </>
  );
};
export default GetStartedPage;
