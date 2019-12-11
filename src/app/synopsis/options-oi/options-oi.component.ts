import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { OOIDataService } from './ooidata.service';
import { LongCall, OOIRes } from './interfaces/OOIRes.interface';
import { Headers } from './interfaces/OOIRes.interface';
import { Subscription } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-options-oi',
  templateUrl: './options-oi.component.html',
  styleUrls: ['./options-oi.component.scss'],
})
export class OptionsOIComponent implements OnInit, AfterViewInit, OnDestroy {
  shortCall: LongCall[];
  shortPut: LongCall[];
  shortCoveringCall: LongCall[];
  shortCoveringPut: LongCall[];
  longUnwindingPut: LongCall[];
  longUnwindingCall: LongCall[];
  longPut: LongCall[];
  longCall: LongCall[];
  subscription: Subscription;
  animationId: number;
  constructor(private readonly ooiDataS: OOIDataService) {}

  ngOnInit() {
    this.subscription = TimerObservable.create(0, 1000 * 60 * 5).subscribe(
      this.getData.bind(this),
    );
  }
  private getData() {
    scroll(0, 0);
    this.subscription.add(
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
            default:
              console.error('API Changed');
          }
        });
      }),
    );
  }
  ngAfterViewInit(): void {
    const autoScroll = () => {
      this.animationId = requestAnimationFrame(autoScroll);
      scrollBy({
        top: 1,
        behavior: 'smooth',
      });
    };
    autoScroll();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
