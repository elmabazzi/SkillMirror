import express from "express";
import { healthRouter } from "./routes/health";

// Weekend 2 scope: the only endpoint is GET /health.
// Future routes are documented in docs/rules-and-flows.md and are not built yet.
export const app = express();

app.disable("x-powered-by");
app.use(express.json());

app.use(healthRouter);

app.use((_req, res) => {
  res.status(404).json({ status: "error", message: "Not found" });
});
