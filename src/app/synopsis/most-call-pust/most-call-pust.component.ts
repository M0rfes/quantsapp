import { Component, OnInit, Input } from '@angular/core';
import { MostTradedIndexCallOption } from '../fovolume/interfaces/FOVRes.interface';

@Component({
  selector: 'app-most-call-pust',
  templateUrl: './most-call-pust.component.html',
  styleUrls: ['./most-call-pust.component.scss'],
})
export class MostCallPustComponent implements OnInit {
  @Input() stocks: MostTradedIndexCallOption[];
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
