import { Component, OnInit, Input } from '@angular/core';
import { PTRes } from '../interfaces/TRes.interface';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  @Input() item: PTRes;
  constructor() {}

  ngOnInit() {}
}
