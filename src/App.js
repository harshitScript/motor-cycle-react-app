//import { lazy, Suspense } from "react";
import classes from "./App.module.css";
import { Route, Redirect, Switch, useLocation } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// CODE OPTIMIZATION( LAZY LOADING )

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import GetStartedPage from "./pages/GetStartedPage";
import ResponsePage from "./pages/ResponsePage";
import BikeDescriptionPage from "./pages/BikeDescriptionPage";
/*
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const GetStartedPage = lazy(() => import("./pages/GetStartedPage"));
const ResponsePage = lazy(() => import("./pages/ResponsePage"));
const BikeDescriptionPage = lazy(() => import("./pages/BikeDescriptionPage"));
*/
function App() {
  const location = useLocation();
  return (
    /*<Suspense
      fallback={
        <div className={classes.fallbackDiv}>
          <i className="fa fa-fw fa-spinner fa-spin fa-4x"></i>
        </div>
      }
    >*/
    <TransitionGroup>
      <CSSTransition
        timeout={{
          enter: 500,
          exit: 500,
        }}
        classNames={{
          enter: "",
          enterActive: classes.pageEnter, //entering
          enterDone: "", //entered
          exit: "",
          exitActive: classes.pageExit, //exiting
          exitDone: "", //exited
        }}
        key={location.key}
      >
        {/* Switch component returns only one component per URL  */}
        <Switch location={location}>
          <Route path="/" exact>
            <Redirect to="/home-page" />
          </Route>
          <Route path="/home-page" component={HomePage} />
          <Route path="/get-started-page" component={GetStartedPage} />
          {/* Dynamic params are mandatory for matching */}
          <Route path="/response-page/:responseType" component={ResponsePage} />
          <Route
            path="/bike-description/:bikeId"
            component={BikeDescriptionPage}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    /*</Suspense>*/
  );
}

export default App;
