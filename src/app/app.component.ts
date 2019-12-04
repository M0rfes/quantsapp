import { DataService } from './data.service';
import { Chart } from 'chart.js';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Res } from './interfaces/Res.type';

import Result from './interfaces/Result.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
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

      const data = {
        datasets: [
          {
            data: [+res.len_l, +res.len_lu, +res.len_s, +res.len_sc],
            backgroundColor: ['#00ff00', '#00d0f9', '#ff0000', '#ffff00'],
          },
        ],

        labels: ['l', 'lu', 's', 'sc'],
      };
      this.ctx = new Chart('ctx', {
        type: 'doughnut',
        data,
      });
    });
  }
  ngAfterViewInit(): void {}
  private dataToObjectWithType(type: string, data: string) {
    return data
      .split(';')
      .map(col => col.split(','))
      .map(row => {
        const [SYMBOL, PRICE, OI, PRICE_CHANGE, OI_CHANGE] = row;
        return {
          type,
          SYMBOL,
          PRICE,
          OI,
          PRICE_CHANGE,
          OI_CHANGE,
        };
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
