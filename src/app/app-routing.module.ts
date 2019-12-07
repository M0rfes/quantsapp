import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuturesOIComponent } from './synopsis/futures-oi/futures-oi.component';
import { FOVolumeComponent } from './synopsis/fovolume/fovolume.component';

const routes: Routes = [
  { path: '', component: FuturesOIComponent },
  { path: 'fov', component: FOVolumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
