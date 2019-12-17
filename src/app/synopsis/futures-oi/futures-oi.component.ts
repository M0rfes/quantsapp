import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { Subscription, BehaviorSubject } from 'rxjs';
import { FOIRes } from 'src/app/synopsis/futures-oi/interfaces/FOIRes.type';
import { FOIDataService } from './FOIData.service';
import { take, tap } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { TupleOfFour } from 'src/utils/tupleOfFour';
@Component({
  selector: 'app-futures-oi',
  templateUrl: './futures-oi.component.html',
  styleUrls: ['./futures-oi.component.scss'],
})
export class FuturesOIComponent implements OnInit, OnDestroy {
  readonly stocks = new BehaviorSubject<TupleOfFour<FOIRes>[]>([]);
  subscription: Subscription;
  ctx: Chart;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  vs: CdkVirtualScrollViewport;
  dataLen: number;
  currentData: FOIRes[];
  constructor(private readonly dataS: FOIDataService) {}

  ngOnInit(): void {
    this.subscription = this.getData();
  }
  private getData() {
    return this.dataS
      .data()
      .pipe(
        tap(([data, r]) => {
          this.ctx = new Chart('ctx', {
            type: 'doughnut',
            data: {
              datasets: [
                {
                  data: [data.len_l, data.len_lu, data.len_s, data.len_sc],
                  backgroundColor: ['#00ff00', '#00d0f9', '#ff0000', '#ffff00'],
                },
              ],
              labels: [
                `L ${data.len_l}`,
                `LU ${data.len_lu}`,
                `S ${data.len_s}`,
                `SC ${data.len_sc}`,
              ],
            },
            options: {
              legend: {
                display: true,
                labels: {
                  fontColor: '#ffffffff',
                  fontSize: 32,
                },
              },
            },
          });
          this.reaFetch(r);
        }),
      )
      .subscribe();
  }
  private reaFetch(r: FOIRes[]) {
    const data = this.dataS.batchFour(r);
    this.stocks.next([...this.stocks.getValue(), ...data]);
    this.currentData = r;
    this.dataLen = this.stocks.getValue().length - 1;
  }
  refresh(e: number) {
    if (e === this.dataLen - 1) {
      this.reaFetch(this.currentData);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
