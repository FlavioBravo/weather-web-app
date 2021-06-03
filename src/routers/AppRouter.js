import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Forecast } from "../components/forecast/Forecast";
import { Home } from "../components/home/Home";

export const AppRouter = () => {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/forecast/:cityId" component={Forecast} />
        </Switch>
      </div>
    </Router>
  );
}