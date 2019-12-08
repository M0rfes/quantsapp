export interface FOVRes {
  'Most Traded Futures'?: MostTradedFuture[];
  'Most Traded Index Call Options'?: MostTradedIndexCallOption[];
  'Most Traded Index Put Options'?: MostTradedIndexCallOption[];
  'Most Traded Stock Call Options'?: MostTradedIndexCallOption[];
  'Most Traded Stock Put Options'?: MostTradedIndexCallOption[];
  'Most Traded Leaps'?: MostTradedLeap[];
}

export enum Headers {
  MostTradedFutures = 'Most Traded Futures',
  MostTradedIndexCallOptions = 'Most Traded Index Call Options',
  MostTradedIndexPutOptions = 'Most Traded Index Put Options',
  MostTradedStockCallOptions = 'Most Traded Stock Call Options',
  MostTradedStockPutOptions = 'Most Traded Stock Put Options',
  MostTradedLeaps = 'Most Traded Leaps',
}

export interface MostTradedLeap {
  ltp: string;
  symbol: string;
  oic: string;
  opt_type: string;
  expiry: string;
  pc: string;
  volume_lots: string;
  strike: string;
}

export interface MostTradedIndexCallOption {
  ltp: string;
  symbol: string;
  oic: string;
  expiry: string;
  pc: string;
  volume_lots: string;
  strike: string;
}

export interface MostTradedFuture {
  ltp: string;
  symbol: string;
  oic: string;
  expiry: string;
  pc: string;
  volume_lots: string;
}
