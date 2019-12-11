import { Component, OnInit } from '@angular/core';
import { OOIDataService } from './ooidata.service';
import { LongCall, OOIRes } from './interfaces/OOIRes.interface';
import { Headers } from './interfaces/OOIRes.interface';

@Component({
  selector: 'app-options-oi',
  templateUrl: './options-oi.component.html',
  styleUrls: ['./options-oi.component.scss'],
})
export class OptionsOIComponent implements OnInit {
  shortCall: LongCall[];
  shortPut: LongCall[];
  shortCoveringCall: LongCall[];
  shortCoveringPut: LongCall[];
  longUnwindingPut: LongCall[];
  longUnwindingCall: LongCall[];
  longPut: LongCall[];
  longCall: LongCall[];
  constructor(private readonly ooiDataS: OOIDataService) {}

  ngOnInit() {
    this.ooiDataS.data().subscribe((res: OOIRes[]) => {
      res.forEach(d => {
        const [head] = Object.keys(d);
        switch (head) {
          case Headers.LongCall:
            this.longCall = d['Long Call'];
            return;
          case Headers.LongPut:
            this.longPut = d['Long Put'];
            return;
          case Headers.ShortCall:
            this.shortCall = d['Short Call'];
            return;
          case Headers.ShortPut:
            this.shortPut = d['Short Put'];
            return;
          case Headers.ShortCoveringCall:
            this.shortCoveringCall = d['Short-Covering Call'];
            return;
          case Headers.ShortCoveringPut:
            this.shortCoveringPut = d['Short-Covering Put'];
            return;
          case Headers.LongUnwindingCall:
            this.longUnwindingCall = d['Long-Unwinding Call'];
            return;
          case Headers.LongUnwindingPut:
            this.longUnwindingPut = d['Long-Unwinding Put'];
            return;
        }
      });
    });
  }
}
