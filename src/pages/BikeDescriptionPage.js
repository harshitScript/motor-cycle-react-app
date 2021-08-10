import classes from "./BikeDescriptionPage.module.css";
import { useSelector } from "react-redux";
import Card from "../Components/UI/Card";
import { useParams } from "react-router";

const BikeDescriptionPage = (props) => {
  const params = useParams();
  const bikeData = useSelector((state) => state.bikeData);

  const id = +params.bikeId;

  const bikeDescriptionObj = bikeData.find((singleObj) => {
    return singleObj.id === id;
  });

  console.log(bikeDescriptionObj);

  return (
    <Card className={classes.bikeDespCard}>
      <div className={classes.imgContainer}>
        <img
          src={bikeDescriptionObj.src}
          width="60%"
          alt={`${bikeDescriptionObj.bikeName} bike.`}
        />
      </div>

      <div className={classes.bikeNameAndReleaseContainer}>
        <span className={classes.bikeNameSpan}>
          {bikeDescriptionObj.bikeName}
        </span>
        <span className={classes.bikeReleaseYearSpan}>
          {bikeDescriptionObj.releaseYear}
        </span>
      </div>

      <hr />
      <div>
        <span className={classes.desc}>{bikeDescriptionObj.desc}</span>
      </div>

      <div className={classes.footerContainer}>
        <span>@2021 Moto comp pvt. ltd.</span>
      </div>
    </Card>
  );
};
export default BikeDescriptionPage;
