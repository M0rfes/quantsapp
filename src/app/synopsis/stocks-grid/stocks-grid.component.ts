import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { FOVRes } from '../fovolume/interfaces/FOVRes.interface';
import { OOIRes } from '../options-oi/interfaces/OOIRes.interface';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-stocks-grid',
  templateUrl: './stocks-grid.component.html',
  styleUrls: ['./stocks-grid.component.scss'],
})
export class StocksGridComponent implements OnInit, OnDestroy {
  @Input() data: Observable<FOVRes[] | OOIRes[]>;
  stocks = new BehaviorSubject<FOVRes[] | OOIRes[]>([]);
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  vs: CdkVirtualScrollViewport;
  subscription: Subscription;
  constructor() {}

  ngOnInit() {
    this.subscription = this.getData();
  }
  private getData() {
    return this.data
      .pipe(
        tap(data => {
          this.stocks.next([...this.stocks.getValue(), ...data] as any);
        }),
        take(1),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
