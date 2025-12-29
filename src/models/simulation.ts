export interface SimulationInput {
  vehicleName: string;
  vehicleType?: string;
  price: number;
  installments: number;
}

export interface SimulationResult {
  vehicle: string;
  type?: string;
  installments: number;
  monthlyRate: number;
  installmentValue: number;
  totalPaid: number;
}
