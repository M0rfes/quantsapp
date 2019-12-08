import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
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
export class FuturesOIComponent implements OnInit, OnDestroy, AfterViewInit {
  readonly stocks = new BehaviorSubject<FOIRes[]>([]);
  subscription: Subscription;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  vs: CdkVirtualScrollViewport;
  ctx: Chart;
  offSet = 10;
  anmiationId: number;
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
  log() {
    console.log('vsEnd');
  }

  ngAfterViewInit(): void {
    const scroll = () => {
      this.anmiationId = requestAnimationFrame(scroll);
      this.vs.scrollToOffset(this.offSet++, 'smooth');
    };
    scroll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    cancelAnimationFrame(this.anmiationId);
  }
}
