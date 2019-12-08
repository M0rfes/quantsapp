import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuturesOIComponent } from './futures-oi/futures-oi.component';
import { FOVolumeComponent } from './fovolume/fovolume.component';
import { HttpClientModule } from '@angular/common/http';
import { HeatMapComponent } from './futures-oi/heat-map/heat-map.component';
import { SynopsisRoutingModule } from './synopsis-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [FuturesOIComponent, HeatMapComponent, FOVolumeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SynopsisRoutingModule,
    ScrollingModule,
  ],
})
export class SynopsisModule {}
