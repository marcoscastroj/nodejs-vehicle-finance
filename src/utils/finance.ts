export function calculateInstallment(
  price: number,
  rate: number,
  months: number
): number {
  const factor = Math.pow(1 + rate, months);
  return price * (rate * factor) / (factor - 1);
}
