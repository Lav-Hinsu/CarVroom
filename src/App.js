import React from "react";
import Dashboard from "./pages/Dashboard"
import Form from "./pages/Form"
import Details from "./pages/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route >
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + "/form"} component={Form} />
          <Route exact path={process.env.PUBLIC_URL + "/details"} component={Details} />
        </Route>
      </Switch>
    </Router>
  );
}