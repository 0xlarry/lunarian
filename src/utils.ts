import { AssetData, PairData } from "@/types";

export function formatNumber(value: number, decPlaces: number = 0): string {
  if (value == 0) return "0";

  let integerPart = Math.floor(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (decPlaces == 0) return integerPart;

  let floatPart = value.toFixed(decPlaces).split(".")[1];

  return integerPart + "." + floatPart;
}

export function formatAmount(value: number): string {
  return formatNumber(value, Number.isInteger(value) ? 0 : value >= 1 ? 2 : 4);
}

export function formatMoney(
  value: number,
  currencySymbol: string = "$"
): string {
  return currencySymbol + formatNumber(value, value >= 1 ? 2 : 4);
}

export function isPair(row: AssetData | PairData): boolean {
  return "pairName" in row;
}

export function getPairAmountString(row: PairData): string {
  return (
    `${formatAmount(row.asset1.amount)} ${row.asset1.symbol}` +
    " / " +
    `${formatAmount(row.asset2.amount)} ${row.asset2.symbol}`
  );
}

export function getValue(row: AssetData | PairData): number {
  if ("amount" in row && "price" in row) {
    return row.amount * row.price;
  } else {
    return (
      row.asset1.amount * row.asset1.price +
      row.asset2.amount * row.asset2.price
    );
  }
}

export function getTotalValue(rows: Array<AssetData | PairData>): number {
  return rows.reduce((total: number, row: AssetData | PairData): number => {
    return total + getValue(row);
  }, 0);
}

export function sortByValue(
  rows: Array<AssetData | PairData>
): Array<AssetData | PairData> {
  return rows.sort((a, b) => {
    if (getValue(a) < getValue(b)) return 1;
    else return -1;
  });
}
