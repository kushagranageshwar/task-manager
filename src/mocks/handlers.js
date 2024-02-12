import { rest } from "msw";
import { mockdata } from "./mockdata";

export const handlers = [
  rest.post("http://localhost:8000/tasks", (req, res, ctx) => {
    mockdata.push(req.body);
    return res(ctx.status(200), ctx.json(mockdata));
  }),

  rest.put("http://localhost:8000/tasks/:id", (req, res, ctx) => {
    var newdata = mockdata;
    newdata = newdata.filter(x => x.id != req.body.id)
    newdata.push(req.body);
    return res(ctx.status(200), ctx.json(newdata));
  }),

  rest.get("http://localhost:8000/tasks", (req, res, ctx) => {
    return res(ctx.json(mockdata));
  }),

  rest.delete("http://localhost:8000/tasks/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
