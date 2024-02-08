import { rest } from "msw";
import { mockdata } from "./mockdata";

export const handlers = [
  //   rest.post("", (req, res, ctx) => {
  //     return res(
  //       ctx.status(200),
  //       ctx.json()
  //     );
  //   }),

  rest.get("http://localhost:8000/tasks", (req, res, ctx) => {
    return res(ctx.json(mockdata));
  }),

  rest.delete("http://localhost:8000/tasks/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
