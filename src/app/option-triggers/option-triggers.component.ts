import { Component, OnInit } from '@angular/core';
import { TriggerDataService } from './trigger-data.service';
import { TRes, PTRes } from './interfaces/TRes.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-option-triggers',
  templateUrl: './option-triggers.component.html',
  styleUrls: ['./option-triggers.component.scss'],
})
export class OptionTriggersComponent implements OnInit {
  data: Observable<PTRes[]>;
  data2: Observable<PTRes[]>;
  constructor(private readonly TDataS: TriggerDataService) {}

  ngOnInit() {
    this.data = this.TDataS.data().pipe(
      map(data =>
        data
          .filter(d => +d.h_call_diff < 1 && +d.h_call_diff > -1)
          .map(
            ({
              symbol,
              fut_close,
              h_call_diff,
              h_call,
              h_put,
              h_call_oi,
              h_call_oi_chg,
            }) => ({
              symbol,
              fut_close,
              diff: h_call_diff,
              h_call,
              h_put,
              oi: h_call_oi,
              oi_chg: h_call_oi_chg,
            }),
          ),
      ),
    );
    this.data2 = this.TDataS.data().pipe(
      map(data =>
        data
          .filter(d => +d.h_put_diff < 1 && +d.h_put_diff > -1)
          .map(
            ({
              symbol,
              fut_close,
              h_put_diff,
              h_call,
              h_put,
              h_put_oi,
              h_put_oi_chg,
            }) => ({
              symbol,
              fut_close,
              diff: h_put_diff,
              h_call,
              h_put,
              oi: h_put_oi,
              oi_chg: h_put_oi_chg,
            }),
          ),
      ),
    );
  }
}
