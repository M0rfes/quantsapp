import { Res } from './../interfaces/Res.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css'],
})
export class HeatMapComponent implements OnInit {
  @Input() res: Res[];
  constructor() {}

  ngOnInit() {}
}
