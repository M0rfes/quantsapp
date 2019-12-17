import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as Chart from 'chart.js';
import { Subscription, BehaviorSubject } from 'rxjs';
import { FOIRes } from 'src/app/synopsis/futures-oi/interfaces/FOIRes.type';
import { FOIDataService } from './FOIData.service';
import { tap } from 'rxjs/operators';
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
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
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
          this.ctx = new Chart(this.canvas.nativeElement, {
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
                `S ${data.len_s}`,
                `LU ${data.len_lu}`,
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
                position: 'left',
              },
              aspectRatio: 1,
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
    this.dataLen = this.stocks.getValue().length;
  }
  refresh(e: number) {
    if (e === this.dataLen - 3) {
      this.reaFetch(this.currentData);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
