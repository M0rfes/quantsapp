import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, ScrollingModule, MatCardModule],
  exports: [ScrollingModule, MatCardModule],
})
export class SharedModule {}
