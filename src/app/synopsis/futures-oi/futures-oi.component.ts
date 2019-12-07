import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Res } from 'src/interfaces/Res.type';
import { FOIDataService } from './FOIData.service';
import { take, tap } from 'rxjs/operators';
@Component({
  selector: 'app-futures-oi',
  templateUrl: './futures-oi.component.html',
  styleUrls: ['./futures-oi.component.css'],
})
export class FuturesOIComponent implements OnInit, OnDestroy {
  readonly stocks = new BehaviorSubject<Res[]>([]);
  subscription: Subscription;

  ctx: Chart;
  constructor(private readonly dataS: FOIDataService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.subscription = this.dataS
      .data()
      .pipe(
        tap(([r, data]) => {
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
                  fontSize: 16,
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
