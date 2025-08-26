import { http, HttpResponse } from "msw";
import horsesMock from "./horses.mock.json";
import horseMock from "./horse.mock.json";

export const handlers = [
  http.get("https://vetapinz.azurewebsites.net/api/horses", () => {
    return HttpResponse.json(horsesMock);
  }),

  http.get("https://vetapinz.azurewebsites.net/api/horses/:id", () => {
    return HttpResponse.json(horseMock);
  }),
];
