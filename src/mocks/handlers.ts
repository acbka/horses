import { rest } from "msw";
import horsesMock from "./horses.mock.json";
import horseMock from "./horse.mock.json";

const horsesHandler = rest.get(
  "https://vetapinz.azurewebsites.net/api/horses",
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(horsesMock));
  }
);

const horseHandler = rest.get(
  "https://vetapinz.azurewebsites.net/api/horses/id",
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(horseMock));
  }
);

export const handlers = [horsesHandler, horseHandler];
