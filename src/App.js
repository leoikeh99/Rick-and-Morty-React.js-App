import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./bootswatch/cyborg/bootstrap.min.css";
import "./App.css";
import "./fontawesome/css/all.min.css";
import NavBar from "./components/layout/NavBar";
import MainNav from "./components/layout/MainNav";
import Character from "./components/Character";
import Episode from "./components/Episode";
import Location from "./components/Location";
import SingleCharcater from "./components/SingleCharacter";
import SingleEpisode from "./components/SingleEpisode";
import SingleLocation from "./components/SingleLocation";
import About from "./components/pages/About";
import RMState from "./context/RM/RMState";

const App = () => {
  return (
    <RMState>
      <Router>
        <NavBar />
        <MainNav />
        <Switch>
          <Route exact path="/" component={Character} />
          <Route exact path="/episodes" component={Episode} />
          <Route exact path="/locations" component={Location} />
          <Route
            exact
            path="/character/SingleCharcater/:id"
            component={SingleCharcater}
          />
          <Route
            exact
            path="/episode/SingleEpisode/:id"
            component={SingleEpisode}
          />
          <Route
            exact
            path="/location/SingleLocation/:id"
            component={SingleLocation}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </RMState>
  );
};

export default App;
