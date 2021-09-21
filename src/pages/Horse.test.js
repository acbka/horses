import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Horse from "./Horse";
describe("HorseInfo", () => {
  test("renders with id", () => {
    render(
      <Router>
        <Horse
          horse={{
            id: "12d241d7-7273-4e84-9510-cf9d840f9ef7",
            name: "Artax",
            profile: {
              favouriteFood: "Carrots",
              physical: {
                height: 198.99,
                weight: 400,
              },
            },
          }}
        />
      </Router>
    );
    expect(screen.getByRole("link").href).toBe(
      "http://localhost/horse/12d241d7-7273-4e84-9510-cf9d840f9ef7"
    );
  });
});
