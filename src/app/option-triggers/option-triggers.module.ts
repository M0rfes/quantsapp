import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionTriggersComponent } from './option-triggers.component';
import { OptionTriggersRoutingModule } from './option-triggers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OptionTriggersComponent],
  imports: [CommonModule, OptionTriggersRoutingModule, SharedModule],
})
export class OptionTriggersModule {}
