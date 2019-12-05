import { Res } from './../interfaces/Res.type';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css'],
})
export class HeatMapComponent implements OnInit, AfterViewChecked {
  @Input() res: Res[];
  @ViewChild('end', { static: false }) end: ElementRef;
  constructor() {}

  ngOnInit() {}
  ngAfterViewChecked(): void {
   setTimeout(()=> scrollBy({
    top:16/3
  }),1000)
    console.log("s")
  }
}
