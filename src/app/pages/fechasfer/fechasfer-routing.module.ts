import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechasferPage } from './fechasfer.page';

const routes: Routes = [
  {
    path: '',
    component: FechasferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechasferPageRoutingModule {}
