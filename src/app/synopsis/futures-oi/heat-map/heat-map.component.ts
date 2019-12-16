import { FOIRes } from '../interfaces/FOIRes.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss'],
})
export class HeatMapComponent implements OnInit {
  @Input() stocks: FOIRes[];
  constructor() {}
  ngOnInit() {}
}
