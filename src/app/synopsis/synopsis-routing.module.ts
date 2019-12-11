import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuturesOIComponent } from './futures-oi/futures-oi.component';
import { FOVolumeComponent } from './fovolume/fovolume.component';
import { OptionsOIComponent } from './options-oi/options-oi.component';

const routes: Routes = [
  { path: '', component: FuturesOIComponent },
  { path: 'fov', component: FOVolumeComponent },
  { path: 'ooi', component: OptionsOIComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SynopsisRoutingModule {}
