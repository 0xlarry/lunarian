export interface AssetData {
  icon: string;
  symbol: string;
  amount: number;
  price: number;
}

export interface PairData {
  pairName: string;
  asset1: AssetData;
  asset2: AssetData;
}
