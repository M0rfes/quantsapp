import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuturesOIComponent } from './futures-oi/futures-oi.component';
import { FOVolumeComponent } from './fovolume/fovolume.component';
import { HttpClientModule } from '@angular/common/http';
import { HeatMapComponent } from './futures-oi/heat-map/heat-map.component';
import { SynopsisRoutingModule } from './synopsis-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MostTradedFuturesComponent } from './fovolume/most-traded-futures/most-traded-futures.component';

import { MostCallPustComponent } from './most-call-pust/most-call-pust.component';
import { OptionsOIComponent } from './options-oi/options-oi.component';
@NgModule({
  declarations: [
    FuturesOIComponent,
    HeatMapComponent,
    FOVolumeComponent,
    MostTradedFuturesComponent,
    MostCallPustComponent,
    OptionsOIComponent,
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
