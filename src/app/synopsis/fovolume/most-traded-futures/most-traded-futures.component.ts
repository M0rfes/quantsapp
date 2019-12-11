import { Component, OnInit, Input } from '@angular/core';
import { MostTradedFuture } from '../interfaces/FOVRes.interface';

@Component({
  selector: 'app-most-traded-futures',
  templateUrl: './most-traded-futures.component.html',
  styleUrls: ['./most-traded-futures.component.scss'],
})
export class MostTradedFuturesComponent implements OnInit {
  @Input() mostTradedFutures: MostTradedFuture[];
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
  priceChange(pc: string) {
    return +pc * 100;
  }
  priceChangeColor(pc: string) {
    if (+pc < 0) {
      return '#ff4500';
    } else if (+pc > 0) {
      return '#90ee90';
    } else {
      return '#ffffff';
    }
  }
}
