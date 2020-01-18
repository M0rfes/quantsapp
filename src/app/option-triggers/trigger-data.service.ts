import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import zipMap from 'src/utils/zipMap';
import { map, tap } from 'rxjs/operators';
import { TResult } from './interfaces/TResult.interface';
import { TRes, PTRes } from './interfaces/TRes.interface';
import { Observable } from 'rxjs';
import { EmitterService } from '../shared/emitter.service';

@Injectable({
  providedIn: 'root',
})
export class TriggerDataService {
  constructor(
    private readonly http: HttpClient,
    private readonly emitS: EmitterService,
  ) {}
  data(): Observable<TRes[]> {
    return this.emitS.emitter(this.fetchData.bind(this));
  }
  private fetchData() {
    return this.http.get<TResult>('http://localhost:3000/ot').pipe(
      tap(console.log),
      map((data: TResult) =>
        Object.entries(data)
          .filter(([, [t]]) => t.length > 1)
          .map(([h, t]) => t.map(val => ({ [h]: val })))
          .reduce(zipMap),
      ),
      tap(console.log),
    );
  }
  batchTwo(
    [f, s, ...rest]: PTRes[],
    ans: [PTRes, PTRes][] = [],
  ): [PTRes, PTRes][] {
    if (rest.length === 0) {
      return [...ans, [f, s]];
    } else {
      return this.batchTwo(rest, [...ans, [f, s]]);
    }
  }
}
