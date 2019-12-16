import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import FOIResult from './interfaces/FOIResult.interface';
import { FOIRes } from 'src/app/synopsis/futures-oi/interfaces/FOIRes.type';
import { EmitterService } from 'src/app/shared/emitter.service';
import { Observable } from 'rxjs';
import { TupleOfFour } from 'src/utils/tupleOfFour';
@Injectable({
  providedIn: 'root',
})
export class FOIDataService {
  constructor(
    private readonly http: HttpClient,
    private readonly emitS: EmitterService,
  ) {}
  data() {
    return this.emitS.emitter<
      [
        {
          len_l: number;
          len_lu: number;
          len_s: number;
          len_sc: number;
        },
        FOIRes[],
      ]
    >(this.fetchData.bind(this));
  }
  private fetchData() {
    return this.http
      .get<FOIResult>(' http://localhost:3000/foi')
      .pipe(map(this.processData.bind(this)), map(this.finalResult.bind(this)));
  }

  private processData(
    res: FOIResult,
  ): [
    FOIRes[],
    { len_l: number; len_lu: number; len_s: number; len_sc: number },
  ] {
    return [
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
    ];
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
  private finalResult([r, data]: [
    FOIRes[],
    { len_l: number; len_lu: number; len_s: number; len_sc: number },
  ]) {
    return [data, r];
  }

  batchFour(
    [f, s, t, fr, ...rest]: FOIRes[],
    ans: [FOIRes, FOIRes, FOIRes, FOIRes][] = [],
  ): [FOIRes, FOIRes, FOIRes, FOIRes][] {
    if (rest.length === 0) {
      return [...ans, [f, s, t, fr]];
    } else {
      return this.batchFour(rest, [...ans, [f, s, t, fr]]);
    }
  }
}
