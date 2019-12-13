import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ot',
    loadChildren: () =>
      import('./option-triggers/option-triggers.module').then(
        m => m.OptionTriggersModule,
      ),
  },
  {
    path: 'otr',
    loadChildren: () =>
      import('./synopsis/synopsis.module').then(m => m.SynopsisModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
