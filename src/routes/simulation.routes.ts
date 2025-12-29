import { Router } from "express";
import { createSimulation } from "../controllers/simulation.controller";

const router = Router();

router.post("/simulations", createSimulation);

export default router;
