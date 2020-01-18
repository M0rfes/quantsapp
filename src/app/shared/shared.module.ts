import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AutoScrollComponent } from './auto-scroll/auto-scroll.component';
import { StrikePipe } from '../strike.pipe';

@NgModule({
  declarations: [AutoScrollComponent, StrikePipe],
  imports: [CommonModule, ScrollingModule, MatCardModule, MatIconModule],
  exports: [
    ScrollingModule,
    MatCardModule,
    MatIconModule,
    AutoScrollComponent,
    StrikePipe,
  ],
})
export class SharedModule {}
