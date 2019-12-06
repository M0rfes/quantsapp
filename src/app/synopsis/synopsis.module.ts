import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuturesOIComponent } from './futures-oi/futures-oi.component';

import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeatMapComponent } from './futures-oi/heat-map/heat-map.component';
@NgModule({
  declarations: [FuturesOIComponent, HeatMapComponent],
  imports: [CommonModule, HttpClientModule, InfiniteScrollModule, NgbModule],
})
export class SynopsisModule {}
