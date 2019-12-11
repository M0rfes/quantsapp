import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { FOVDataService } from './FOVData.service';
import { FOVRes } from './interfaces/FOVRes.interface';
import { Subscription, BehaviorSubject } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { tap, take } from 'rxjs/operators';
@Component({
  selector: 'app-fovolume',
  templateUrl: './fovolume.component.html',
  styleUrls: ['./fovolume.component.scss'],
})
export class FOVolumeComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscription: Subscription;
  private animationId: number;
  stocks = new BehaviorSubject<FOVRes[]>([]);
  offSet = 1;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  vs: CdkVirtualScrollViewport;
  constructor(private readonly fOVDataS: FOVDataService) {}

  ngOnInit() {
    this.subscription = TimerObservable.create(0, 1000 * 60 * 5).subscribe(
      this.getData.bind(this),
    );
  }
  private getData() {
    this.subscription = this.fOVDataS
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
