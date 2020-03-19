import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Error404 from "./components/Error404";
const AppRoutes = () => {
  return (
    <App>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/contacts/:contactId" component={Contacts} exact />
        <Route component={Error404} />
      </Switch>
    </App>
  );
};

export default AppRoutes;
