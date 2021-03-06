import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OOIResult } from './interfaces/OOIResult.interface';
import { map, tap } from 'rxjs/operators';
import { EmitterService } from 'src/app/shared/emitter.service';
import { OOIRes } from './interfaces/OOIRes.interface';

@Injectable({
  providedIn: 'root',
})
export class OOIDataService {
  constructor(
    private readonly http: HttpClient,
    private readonly emitS: EmitterService,
  ) {}
  data() {
    return this.emitS.emitter<OOIRes[]>(this.fetchData.bind(this));
  }
  private fetchData() {
    return this.http
      .get<OOIResult>('http://localhost:3000/ooi')
      .pipe(map(this.dataFromReq), map(this.formate));
  }
  private dataFromReq(d: OOIResult) {
    return Object.values(d.headers)
      .map(v => ({ [v]: d[v] }))
      .reduce((p, c) => ({ ...p, ...c }), {});
  }
  private formate(d) {
    const helper = vs =>
      Object.entries(vs)
        .map(([h, t]: [string, string[]]) => t.map(v => ({ [h]: v })))
        .reduce((p, c) => p.map((p1, i) => ({ ...p1, ...c[i] })));
    return Object.entries(d).map(([type, v1]) => ({ [type]: helper(v1) }));
  }
}
