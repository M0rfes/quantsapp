export interface FOVResult {
  status: string;
  'Most Traded Stock Put Options': MostTradedStockPutOptions;
  data_time: string;
  'Most Traded Leaps': MostTradedLeaps;
  screen: string;
  headers: Headers;
  'Most Traded Stock Call Options': MostTradedStockPutOptions;
  msg: string;
  'Most Traded Index Put Options': MostTradedStockPutOptions;
  'Most Traded Futures': MostTradedFutures;
  'Most Traded Index Call Options': MostTradedStockPutOptions;
}

export interface MostTradedFutures {
  ltp: string[];
  symbol: string[];
  oic: string[];
  expiry: string[];
  pc: string[];
  volume_lots: string[];
}

export interface Headers {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}

export interface MostTradedLeaps {
  ltp: string[];
  symbol: string[];
  oic: string[];
  opt_type: string[];
  expiry: string[];
  pc: string[];
  volume_lots: string[];
  strike: string[];
}

export interface MostTradedStockPutOptions {
  ltp: string[];
  symbol: string[];
  oic: string[];
  expiry: string[];
  pc: string[];
  volume_lots: string[];
  strike: string[];
}
