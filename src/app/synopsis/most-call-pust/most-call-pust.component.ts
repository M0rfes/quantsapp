import { Component, OnInit, Input } from '@angular/core';
import {
  MostTradedIndexCallOption,
  FOVRes,
} from '../fovolume/interfaces/FOVRes.interface';
import { OOIRes } from '../options-oi/interfaces/OOIRes.interface';

@Component({
  selector: 'app-most-call-pust',
  templateUrl: './most-call-pust.component.html',
  styleUrls: ['./most-call-pust.component.scss'],
})
export class MostCallPustComponent implements OnInit {
  @Input() stocks: FOVRes & OOIRes;
  title: string;
  data: MostTradedIndexCallOption;
  constructor() {}

  ngOnInit() {
    const [[title, data]] = Object.entries(this.stocks);
    this.title = title;
    this.data = data;
  }
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
