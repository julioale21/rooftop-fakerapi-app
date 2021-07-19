import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UsersView from "./pages/UsersView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <UsersView />
        </Route>
        <Route path="/">
          <Redirect to="/users" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
