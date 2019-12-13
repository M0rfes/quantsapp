import { Component, OnInit } from '@angular/core';
import { TriggerDataService } from './trigger-data.service';
import { TRes } from './interfaces/TRes.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-option-triggers',
  templateUrl: './option-triggers.component.html',
  styleUrls: ['./option-triggers.component.scss'],
})
export class OptionTriggersComponent implements OnInit {
  data: Observable<TRes[]>;
  data2: Observable<TRes[]>;
  constructor(private readonly TDataS: TriggerDataService) {}

  ngOnInit() {
    this.data = this.TDataS.data().pipe(
      map(data => data.filter(d => +d.h_call_diff < 1 && +d.h_call_diff > -1)),
    );
    this.data2 = this.TDataS.data().pipe(
      map(data => data.filter(d => +d.h_put_diff < 1 && +d.h_put_diff > -1)),
    );
  }
}
