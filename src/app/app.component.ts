import { DataService } from './data.service';
import { Chart } from 'chart.js';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Res } from './interfaces/Res.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  res: Res[];

  ctx: Chart;
  constructor(private readonly dataS: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataS.data.subscribe(res => {
      this.res = [
        ...this.dataToObjectWithType('l', res.l),
        ...this.dataToObjectWithType('lu', res.lu),
        ...this.dataToObjectWithType('s', res.s),
        ...this.dataToObjectWithType('sc', res.sc),
      ].sort(({ PRICE_CHANGE: apc }, { PRICE_CHANGE: bpc }) =>
        +apc > +bpc ? -1 : 1,
      );
      this.ctx = new Chart('ctx', {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [+res.len_l, +res.len_lu, +res.len_s, +res.len_sc],
              backgroundColor: ['#00ff00', '#00d0f9', '#ff0000', '#ffff00'],
            },
          ],

          labels: [
            `L ${res.len_l}`,
            `LU ${res.len_lu}`,
            `S ${res.len_s}`,
            `SC ${res.len_sc}`,
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
    });
  }
  private dataToObjectWithType(type: string, data: string) {
    return data
      .split(';')
      .map(col => col.split(','))
      .map(row => {
        const [SYMBOL, PRICE, OI, PRICE_CHANGE, OI_CHANGE] = row;
        return {
          type,
          SYMBOL,
          PRICE: +PRICE,
          OI: +OI,
          PRICE_CHANGE: +PRICE_CHANGE,
          OI_CHANGE: +OI_CHANGE,
        };
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
