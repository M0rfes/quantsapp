import { Component, OnInit, Input } from '@angular/core';
import { PTRes } from '../interfaces/TRes.interface';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss'],
})
export class StocksListComponent implements OnInit {
  @Input() stocks: PTRes[];
  constructor() {}

  ngOnInit() {}
}
