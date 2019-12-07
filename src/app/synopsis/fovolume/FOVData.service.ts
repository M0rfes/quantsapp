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
      .pipe(map(this.dataFromReq()), map(this.formate()));
  }
  private formate(): (
    value: { [x: string]: any },
    index: number,
  ) => { [x: string]: { [x: string]: string }[] }[] {
    const helper = vs =>
      Object.entries(vs)
        .map(([h, t]: [string, string[]]) => t.map(v => ({ [h]: v })))
        .reduce((p, c) => p.map((p1, i) => ({ ...p1, ...c[i] })));
    return d => Object.entries(d).map(([type, v1]) => ({ [type]: helper(v1) }));
  }

  private dataFromReq(): (value: any, index: number) => { [x: string]: any } {
    return (d: any) => {
      return Object.values(d.headers)
        .map((v: string) => {
          return { [v]: d[v] };
        })
        .reduce((p, c) => {
          return { ...p, ...c };
        }, {});
    };
  }
}
