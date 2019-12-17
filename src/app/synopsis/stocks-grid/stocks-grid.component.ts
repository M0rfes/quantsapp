import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { FOVRes } from '../fovolume/interfaces/FOVRes.interface';
import { OOIRes } from '../options-oi/interfaces/OOIRes.interface';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { tap, take } from 'rxjs/operators';
import { AutoScrollComponent } from 'src/app/shared/auto-scroll/auto-scroll.component';

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
  dataLen: number;
  currentData: FOVRes[] | OOIRes[] = [];
  constructor() {}

  ngOnInit() {
    this.subscription = this.getData();
  }
  private getData() {
    return this.data.pipe(tap(this.refeatch.bind(this))).subscribe();
  }
  private refeatch(data: FOVRes[] | OOIRes[]) {
    this.stocks.next([...this.stocks.getValue(), ...data] as any);
    this.dataLen = this.stocks.getValue().length - 1;
    this.currentData = data;
  }
  log(e: any) {
    if (e === this.dataLen) {
      this.refeatch(this.currentData);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
