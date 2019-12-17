import { Component, OnInit, OnDestroy } from '@angular/core';
import { TriggerDataService } from './trigger-data.service';
import { TRes, PTRes } from './interfaces/TRes.interface';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-option-triggers',
  templateUrl: './option-triggers.component.html',
  styleUrls: ['./option-triggers.component.scss'],
})
export class OptionTriggersComponent implements OnInit, OnDestroy {
  calls = new BehaviorSubject<[PTRes, PTRes][]>([]);
  puts = new BehaviorSubject<[PTRes, PTRes][]>([]);
  callSubscription: Subscription;
  putSubscription: Subscription;
  currentcallData: PTRes[];
  callLen: number;
  currentPutData: PTRes[];
  putLen: number;
  constructor(private readonly TDataS: TriggerDataService) {}

  ngOnInit() {
    this.callSubscription = this.getCalls();
    this.putSubscription = this.getPuts();
  }

  private getCalls() {
    return this.TDataS.data()
      .pipe(
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
                type: 'call',
              }),
            ),
        ),
        tap(this.refetchCalls.bind(this)),
      )
      .subscribe();
  }
  private getPuts() {
    return this.TDataS.data()
      .pipe(
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
                type: 'put',
              }),
            ),
        ),
        tap(this.refetchPuts.bind(this)),
      )
      .subscribe();
  }
  private refetchCalls(data: PTRes[]) {
    const cData = this.TDataS.batchTwo(data);
    this.calls.next([...this.calls.getValue(), ...cData]);
    this.currentcallData = data;
    this.callLen = this.calls.getValue().length - 1;
  }
  refreashCalls(e: number) {
    console.log(e, this.callLen);
    if (e === this.callLen - 1) {
      this.refetchCalls(this.currentcallData);
    }
  }
  private refetchPuts(data: PTRes[]) {
    const cData = this.TDataS.batchTwo(data);
    this.puts.next([...this.calls.getValue(), ...cData]);
    this.currentPutData = data;
    this.putLen = this.puts.getValue().length - 1;
  }
  refreashPuts(e: number) {
    console.log(e, this.putLen);
    if (e === this.putLen - 1) {
      this.refetchPuts(this.currentPutData);
    }
  }
  ngOnDestroy(): void {
    this.callSubscription.unsubscribe();
    this.putSubscription.unsubscribe();
  }
}
