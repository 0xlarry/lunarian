export function formatNumber(value: number, decPlaces: number = 0): string {
  if (value == 0) return "0";

  let integerPart = Math.floor(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (decPlaces == 0) return integerPart;

  let floatPart = value.toFixed(decPlaces).split(".")[1];

  return integerPart + "." + floatPart;
}

export function formatMoney(
  value: number,
  currencySymbol: string = "$"
): string {
  return currencySymbol + formatNumber(value, value >= 1 ? 2 : 4);
}
