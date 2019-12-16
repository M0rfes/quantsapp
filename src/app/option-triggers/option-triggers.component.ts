import { Component, OnInit } from '@angular/core';
import { TriggerDataService } from './trigger-data.service';
import { TRes, PTRes } from './interfaces/TRes.interface';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-option-triggers',
  templateUrl: './option-triggers.component.html',
  styleUrls: ['./option-triggers.component.scss'],
})
export class OptionTriggersComponent implements OnInit {
  calls = new BehaviorSubject<PTRes[]>([]);
  puts = new BehaviorSubject<PTRes[]>([]);
  subscription: Subscription;
  constructor(private readonly TDataS: TriggerDataService) {}

  ngOnInit() {
    this.TDataS.data()
      .pipe(
        tap(data =>
          data
            .filter(d => +d.h_call_diff < 1 && +d.h_call_diff > -1)
            .forEach(
              ({
                symbol,
                fut_close,
                h_call_diff,
                h_call,
                h_put,
                h_call_oi,
                h_call_oi_chg,
              }) => {
                const current = {
                  symbol,
                  fut_close,
                  diff: h_call_diff,
                  h_call,
                  h_put,
                  oi: h_call_oi,
                  oi_chg: h_call_oi_chg,
                };
                this.calls.next([...this.calls.getValue(), current]);
              },
            ),
        ),
        tap(data =>
          data
            .filter(d => +d.h_put_diff < 1 && +d.h_put_diff > -1)
            .forEach(
              ({
                symbol,
                fut_close,
                h_put_diff,
                h_call,
                h_put,
                h_put_oi,
                h_put_oi_chg,
              }) => {
                const current = {
                  symbol,
                  fut_close,
                  diff: h_put_diff,
                  h_call,
                  h_put,
                  oi: h_put_oi,
                  oi_chg: h_put_oi_chg,
                };
                this.puts.next([...this.puts.getValue(), current]);
              },
            ),
        ),
        take(1),
      )
      .subscribe();
  }
}
