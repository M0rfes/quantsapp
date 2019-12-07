import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import Result from '../../../interfaces/Result.interface';
import { Observable } from 'rxjs';
import { Res } from 'src/interfaces/Res.type';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly http: HttpClient) {}

  data(): Observable<
    [Res[], { len_l: number; len_lu: number; len_s: number; len_sc: number }]
  > {
    console.log('data');
    return this.http.get<Result>(' http://localhost:3000/foi').pipe(
      map(res => [
        [
          ...this.dataToObjectWithType('l', res.l),
          ...this.dataToObjectWithType('lu', res.lu),
          ...this.dataToObjectWithType('s', res.s),
          ...this.dataToObjectWithType('sc', res.sc),
        ].sort(({ PRICE_CHANGE: apc }, { PRICE_CHANGE: bpc }) =>
          +apc > +bpc ? -1 : 1,
        ),
        {
          len_l: +res.len_l,
          len_lu: +res.len_lu,
          len_s: +res.len_s,
          len_sc: +res.len_sc,
        },
      ]),
    );
  }
  private dataToObjectWithType(type: string, data: string) {
    return data
      .split(';')
      .map(col => col.split(','))
      .map(row => {
        const [SYMBOL, PRICE, OI, PRICE_CHANGE, OI_CHANGE] = row;
        return {
          type,
          SYMBOL,
          PRICE: +PRICE,
          OI: +OI,
          PRICE_CHANGE: +PRICE_CHANGE,
          OI_CHANGE: +OI_CHANGE,
        };
      });
  }
}
