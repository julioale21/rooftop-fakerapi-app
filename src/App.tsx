import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppLayout } from "./components";
import ProductsView from "./pages/ProductsView";
import UsersView from "./pages/UsersView";

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/users">
            <UsersView />
          </Route>
          <Route path="/products">
            <ProductsView />
          </Route>
          <Route path="/">
            <Redirect to="/users" />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
