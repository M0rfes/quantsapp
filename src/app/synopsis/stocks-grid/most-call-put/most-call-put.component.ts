import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  MostTradedIndexCallOption,
  FOVRes,
} from '../../fovolume/interfaces/FOVRes.interface';
import { OOIRes } from '../../options-oi/interfaces/OOIRes.interface';

@Component({
  selector: 'app-most-call-put',
  templateUrl: './most-call-put.component.html',
  styleUrls: ['./most-call-put.component.scss'],
})
export class MostCallPutComponent implements OnInit, OnDestroy {
  @Input() stocks: FOVRes & OOIRes;
  title: string;
  data: MostTradedIndexCallOption;
  constructor() {}

  ngOnInit() {
    const [[title, data]] = Object.entries(this.stocks);
    this.title = title;
    this.data = data;
    console.log(this.stocks);
  }
  priceChange(pc: string) {
    return +pc * 100;
  }
  priceChangeColor(pc: string) {
    if (+pc < 0) {
      return '#ff4500';
    } else if (+pc > 0) {
      return 'green';
    } else {
      return '#ffffff';
    }
  }
  ngOnDestroy(): void {
    console.log(this.stocks);
  }
}
