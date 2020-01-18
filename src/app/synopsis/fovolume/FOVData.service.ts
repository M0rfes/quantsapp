import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FOVResult } from './interfaces/FOVResult.interface';
import zipMap from 'src/utils/zipMap';
import { EmitterService } from 'src/app/shared/emitter.service';
import { FOVRes } from './interfaces/FOVRes.interface';
@Injectable({
  providedIn: 'root',
})
export class FOVDataService {
  constructor(
    private readonly http: HttpClient,
    private readonly emitS: EmitterService,
  ) {}
  data() {
    return this.emitS.emitter<FOVRes[]>(this.fetchData.bind(this));
  }
  private fetchData() {
    return this.http
      .get<FOVResult>('http://localhost:3000/fov')
      .pipe(map(this.dataFromReq), map(this.formate));
  }
  private dataFromReq(d: FOVResult) {
    return Object.values(d.headers)
      .map(v => ({ [v]: d[v] }))
      .reduce((p, c) => ({ ...p, ...c }), {});
  }
  private formate(d: { [key: number]: any }) {
    const helper = vs =>
      Object.entries(vs)
        .map(([h, t]: [string, string[]]) => t.map(v => ({ [h]: v })))
        .reduce(zipMap);
    return Object.entries(d).map(([type, v1]) => ({ [type]: helper(v1) }));
  }
}
