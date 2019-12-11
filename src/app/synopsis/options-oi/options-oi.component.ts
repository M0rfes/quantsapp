import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { OOIDataService } from './ooidata.service';
import { OOIRes } from './interfaces/OOIRes.interface';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { tap, take } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-options-oi',
  templateUrl: './options-oi.component.html',
  styleUrls: ['./options-oi.component.scss'],
})
export class OptionsOIComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Subscription;
  private animationId: number;
  stocks = new BehaviorSubject<OOIRes[]>([]);
  offSet = 1;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  vs: CdkVirtualScrollViewport;
  constructor(private readonly ooiDataS: OOIDataService) {}

  ngOnInit() {
    this.subscription = TimerObservable.create(0, 1000 * 60 * 5).subscribe(
      this.getData.bind(this),
    );
  }
  private getData() {
    this.subscription = this.ooiDataS
      .data()
      .pipe(
        tap(data => {
          this.stocks.next([...this.stocks.getValue(), ...data]);
        }),
        take(1),
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    const scroll = () => {
      this.animationId = requestAnimationFrame(scroll);
      this.vs.scrollToOffset(this.offSet++, 'smooth');
      scrollBy({
        top: 1,
        behavior: 'smooth',
      });
    };
    scroll();
  }
  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    this.subscription.unsubscribe();
  }
}
