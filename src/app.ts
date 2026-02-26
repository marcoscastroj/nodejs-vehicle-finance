import express from "express";
import simulationRoutes from "./routes/simulation.routes";

const app = express();

app.use(express.json());
app.use("/api", simulationRoutes);

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

export default app;