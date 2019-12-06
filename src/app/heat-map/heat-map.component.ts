import { Res } from './../interfaces/Res.type';
import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css'],
})
export class HeatMapComponent implements OnInit, AfterViewChecked {
  @Input() res: Res[];
  constructor() {}
  ngOnInit() {}
  ngAfterViewChecked(): void {
    setTimeout(
      () =>
        scrollBy({
          top: 1,
          behavior: 'smooth',
        }),
      0,
    );
  }
  scrolled() {
    console.log('done');
  }
}
