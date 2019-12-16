import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { Subscription, BehaviorSubject } from 'rxjs';
import { FOIRes } from 'src/app/synopsis/futures-oi/interfaces/FOIRes.type';
import { FOIDataService } from './FOIData.service';
import { take, tap } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-futures-oi',
  templateUrl: './futures-oi.component.html',
  styleUrls: ['./futures-oi.component.scss'],
})
export class FuturesOIComponent implements OnInit, OnDestroy {
  readonly stocks = new BehaviorSubject<[FOIRes, FOIRes, FOIRes, FOIRes][]>([]);
  subscription: Subscription;
  ctx: Chart;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  vs: CdkVirtualScrollViewport;
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
          this.stocks.next([...this.stocks.getValue(), ...r]);
        }),
        take(1),
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
