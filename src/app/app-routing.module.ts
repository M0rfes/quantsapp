import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuturesOIComponent } from './synopsis/futures-oi/futures-oi.component';

const routes: Routes = [{ path: '', component: FuturesOIComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
