export interface OOIRes {
  'Long Call'?: LongCall[];
  'Long Put'?: LongCall[];
  'Short Call'?: LongCall[];
  'Short Put'?: LongCall[];
  'Long-Unwinding Call'?: LongCall[];
  'Long-Unwinding Put'?: LongCall[];
  'Short-Covering Call'?: LongCall[];
  'Short-Covering Put'?: LongCall[];
}

export interface LongCall {
  ltp: string;
  symbol: string;
  oic: string;
  expiry: string;
  pc: string;
  volume_lots: string;
  strike: string;
}

export enum Headers {
  ShortCall = 'Short Call',
  ShortPut = 'Short Put',
  ShortCoveringCall = 'Short-Covering Call',
  ShortCoveringPut = 'Short-Covering Put',
  LongUnwindingCall = 'Long-Unwinding Call',
  LongUnwindingPut = 'Long-Unwinding Put',
  LongPut = 'Long Put',
  LongCall = 'Long Call',
}
