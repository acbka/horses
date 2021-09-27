import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HorseInfo from "./pages/HorseInfo";
import AddHorse from "./pages/AddHorse";
import CompareHorsesPreview from "./pages/CompareHorsesPreview";
import CompareHorses from "./pages/CompareHorses";
import EditHorse from "./pages/EditHorse";

function App() {
  return (
    <Router>
      <CompareHorsesPreview />
      <Switch>
        <Route path="/horse/:id">
          <HorseInfo />
        </Route>
        <Route path="/edit/:id">
          <EditHorse />
        </Route>
        <Route path="/addHorse">
          <AddHorse />
        </Route>
        <Route path="/compareHorses">
          <CompareHorses />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
