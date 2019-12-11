export interface OOIResult {
  status: string;
  'Short Call': ShortCall;
  data_time: string;
  'Short Put': ShortCall;
  screen: string;
  headers: Headers;
  'Short-Covering Call': ShortCall;
  'Long-Unwinding Put': ShortCall;
  'Long-Unwinding Call': ShortCall;
  msg: string;
  'Short-Covering Put': ShortCall;
  'Long Put': ShortCall;
  'Long Call': ShortCall;
}

interface Headers {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
}

interface ShortCall {
  ltp: string[];
  symbol: string[];
  oic: string[];
  expiry: string[];
  pc: string[];
  volume_lots: string[];
  strike: string[];
}
