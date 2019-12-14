import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionTriggersComponent } from './option-triggers.component';
import { OptionTriggersRoutingModule } from './option-triggers-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [OptionTriggersComponent, NavComponent],
  imports: [CommonModule, OptionTriggersRoutingModule, SharedModule],
})
export class OptionTriggersModule {}
