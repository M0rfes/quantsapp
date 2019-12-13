import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionTriggersComponent } from './option-triggers.component';

const routes: Routes = [{ path: '', component: OptionTriggersComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionTriggersRoutingModule {}
