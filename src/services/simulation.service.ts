import { calculateInstallment } from "../utils/finance";
import {
  SimulationInput,
  SimulationResult
} from "../models/simulation";

const INTEREST_RATE = 0.018;
const MAX_INSTALLMENTS = 60;

export function simulateFinancing(
  data: SimulationInput
): SimulationResult {
  const { vehicleName, vehicleType, price, installments } = data;

  if (!vehicleName) {
    throw new Error("Vehicle name is required");
  }

  if (price <= 0) {
    throw new Error("Vehicle price must be greater than zero");
  }

  if (installments < 1 || installments > MAX_INSTALLMENTS) {
    throw new Error(
      `Installments must be between 1 and ${MAX_INSTALLMENTS}`
    );
  }

  const installmentValue = calculateInstallment(
    price,
    INTEREST_RATE,
    installments
  );

  return {
    vehicle: vehicleName,
    type: vehicleType,
    installments,
    monthlyRate: INTEREST_RATE,
    installmentValue: Number(installmentValue.toFixed(2)),
    totalPaid: Number((installmentValue * installments).toFixed(2))
  };
}
