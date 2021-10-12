import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HorseInfo from "./pages/HorseInfo";
import AddHorse from "./pages/AddHorse";
import CompareHorsesPreview from "./pages/CompareHorsesPreview";
import CompareHorses from "./pages/CompareHorses";
import EditHorse from "./pages/EditHorse";

function App() {
  return (
    <HashRouter>
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
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
