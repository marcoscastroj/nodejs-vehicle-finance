import { Request, Response } from "express";
import { simulateFinancing } from "../services/simulation.service";

export function createSimulation(req: Request, res: Response) {
  try {
    const result = simulateFinancing(req.body);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
