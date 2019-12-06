import { Res } from '../../../../interfaces/Res.type';
import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css'],
})
export class HeatMapComponent implements OnInit, AfterViewChecked {
  @Input() stocks: BehaviorSubject<Res>;
  constructor() {}
  ngOnInit() {}
  ngAfterViewChecked(): void {
    setTimeout(
      () =>
        scrollBy({
          top: 1,
          behavior: 'smooth',
        }),
      2,
    );
  }
}
