import { useParams, Route } from "react-router";
import classes from "./ResponsePage.module.css";
import Card from "../Components/UI/Card";
import BikeHealthResponse from "../Components/ResponsePageComponents/BikeHealthResponse";
import BikeAverageResponse from "../Components/ResponsePageComponents/BikeAverageResponse";
const ResponsePage = () => {
  const params = useParams();

  return (
    <>
      <span className={classes.responseType}> {params.responseType}</span>;
      <Card>
        <Route path="/response-page/Bike-Health">
          <BikeHealthResponse />
        </Route>
        <Route path="/response-page/Bike-Average">
          <BikeAverageResponse />
        </Route>
      </Card>
      <div className={classes.footerContainer}>
        <span>@2021 Moto comp pvt. ltd.</span>
      </div>
    </>
  );
};
export default ResponsePage;
