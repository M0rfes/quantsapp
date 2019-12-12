import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuturesOIComponent } from './futures-oi/futures-oi.component';
import { FOVolumeComponent } from './fovolume/fovolume.component';
import { HttpClientModule } from '@angular/common/http';
import { HeatMapComponent } from './futures-oi/heat-map/heat-map.component';
import { SynopsisRoutingModule } from './synopsis-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';

import { MostCallPutComponent } from './stocks-grid/most-call-put/most-call-put.component';
import { OptionsOIComponent } from './options-oi/options-oi.component';
import { NavComponent } from './nav/nav.component';
import { StocksGridComponent } from './stocks-grid/stocks-grid.component';
@NgModule({
  declarations: [
    FuturesOIComponent,
    HeatMapComponent,
    FOVolumeComponent,
    MostCallPutComponent,
    OptionsOIComponent,
    NavComponent,
    StocksGridComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SynopsisRoutingModule,
    ScrollingModule,
    MatCardModule,
  ],
})
export class SynopsisModule {}
