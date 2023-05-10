import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <CompareHorsesPreview />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/horse/:id" element={<HorseInfo />} />
        <Route path="/edit/:id" element={<EditHorse />} />
        <Route path="/addHorse" element={<AddHorse />} />
        <Route path="/compareHorses" element={<CompareHorses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
