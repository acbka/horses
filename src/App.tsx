import React, { useEffect } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { useAppDispatch } from "./store/store";
import { getHorses } from "./store/requests/getHorses";
import CompareHorsesPreview from "./components/CompareHorsesPreview";
import AddHorse from "./pages/AddHorse";
import CompareHorses from "./pages/CompareHorses";
import EditHorse from "./pages/EditHorse";
import HomePage from "./pages/HomePage";
import HorseInfo from "./pages/HorseInfo";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHorses());
  }, [dispatch]);

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
