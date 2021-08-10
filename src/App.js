import { lazy, Suspense } from "react";
import classes from "./App.module.css";
import { Route, Redirect, Switch } from "react-router";

// CODE OPTIMIZATION( LAZY LOADING )

//import HomePage from "./pages/HomePage";
//import NotFoundPage from "./pages/NotFoundPage";
//import GetStartedPage from "./pages/GetStartedPage";
//import ResponsePage from "./pages/ResponsePage";
//import BikeDescriptionPage from "./pages/BikeDescriptionPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const GetStartedPage = lazy(() => import("./pages/GetStartedPage"));
const ResponsePage = lazy(() => import("./pages/ResponsePage"));
const BikeDescriptionPage = lazy(() => import("./pages/BikeDescriptionPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className={classes.fallbackDiv}>
          <i className="fa fa-fw fa-spinner fa-spin fa-4x"></i>
        </div>
      }
    >
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home-page" />
        </Route>
        <Route path="/home-page">
          <HomePage />
        </Route>
        <Route path="/get-started-page">
          <GetStartedPage />
        </Route>
        <Route path="/response-page/:responseType">
          {" "}
          {/* Dynamic params are mandatory for matching */}
          <ResponsePage />
        </Route>
        <Route path="/bike-description/:bikeId">
          <BikeDescriptionPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
