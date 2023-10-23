import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuienessomosPage } from './quienessomos.page';

const routes: Routes = [
  {
    path: '',
    component: QuienessomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuienessomosPageRoutingModule {}
