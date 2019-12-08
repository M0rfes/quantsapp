import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FOVDataService {
  constructor(private readonly http: HttpClient) {}
  data() {
    return this.http
      .get('http://localhost:3000/fov')
      .pipe(map(this.dataFromReq), map(this.formate));
  }
  private formate(d) {
    const helper = vs =>
      Object.entries(vs)
        .map(([h, t]: [string, string[]]) => t.map(v => ({ [h]: v })))
        .reduce((p, c) => p.map((p1, i) => ({ ...p1, ...c[i] })));
    return Object.entries(d).map(([type, v1]) => ({ [type]: helper(v1) }));
  }

  private dataFromReq(d) {
    return Object.values(d.headers)
      .map((v: string) => ({ [v]: d[v] }))
      .reduce((p, c) => ({ ...p, ...c }), {});
  }
}
