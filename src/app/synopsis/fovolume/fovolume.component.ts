import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, flatMap } from 'rxjs/operators';
import { pluginService } from 'chart.js';
@Component({
  selector: 'app-fovolume',
  templateUrl: './fovolume.component.html',
  styleUrls: ['./fovolume.component.css'],
})
export class FOVolumeComponent implements OnInit {
  data: any;
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.data = this.http.get('http://localhost:3000/fov').pipe(
      map((d: any) => {
        return Object.values(d.headers)
          .map((v: string) => {
            return { [v]: d[v] };
          })
          .reduce((p, c) => {
            return { ...p, ...c };
          }, {});
      }),
      map(d => {
        const v = Object.entries(d);
        return v.map(([t, v]) => {
          const temp = this.pp(v);
          // const tr = temp.reduce(([v, ...t], [v1, ...t1]) => {
          //   return [{ ...v, ...v1 }, ...t, ...t1];
          // }, []);
          const tr = temp.reduce((p, c) => {
            const t = p.map((p1, i) => ({ ...p1, ...c[i] }));
            console.log(t);
            return t;
          });
          return { [t]: tr };
        });
      }),
    );
  }
  pp(vs: any) {
    return Object.entries(vs).map(([h, t]: [string, string[]]) =>
      t.map(v => ({ [h]: v })),
    );
  }
  tt([h1 = {}, ...t1]: any[], [h2 = {}, ...t2]: any[], res = {}) {
    const th = {
      ...res,
      ...h1,
      ...h2,
    };
    console.log(h1, t1, h2, t2);
    if (t2.length === 0) {
      return th;
    } else {
      console.log(h1, t1, h2, t2);
      return this.tt(t1, t2, th);
    }
  }
}
