import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionTriggersComponent } from './option-triggers.component';
import { OptionTriggersRoutingModule } from './option-triggers-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './nav/nav.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { HeadersComponent } from './headers/headers.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [OptionTriggersComponent, NavComponent, StocksListComponent, HeadersComponent, StockComponent],
  imports: [CommonModule, OptionTriggersRoutingModule, SharedModule],
})
export class OptionTriggersModule {}
