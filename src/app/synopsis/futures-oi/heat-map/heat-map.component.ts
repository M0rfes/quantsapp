import { FOIRes } from '../interfaces/FOIRes.type';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  Component,
  OnInit,
  Input,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss'],
})
export class HeatMapComponent implements OnInit, OnDestroy {
  @Input() stocks: BehaviorSubject<FOIRes[]>;
  timer: any;
  constructor() {}
  ngOnInit() {}
  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
