import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FOVResult } from './interfaces/FOVResult.interface';
@Injectable({
  providedIn: 'root',
})
export class FOVDataService {
  constructor(private readonly http: HttpClient) {}
  data() {
    return this.http
      .get<FOVResult>('http://localhost:3000/fov')
      .pipe(map(this.dataFromReq), map(this.formate));
  }
  private dataFromReq(d: FOVResult) {
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
