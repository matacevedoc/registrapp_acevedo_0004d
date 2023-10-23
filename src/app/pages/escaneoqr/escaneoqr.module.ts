import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneoqrPageRoutingModule } from './escaneoqr-routing.module';

import { EscaneoqrPage } from './escaneoqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneoqrPageRoutingModule
  ],
  declarations: [EscaneoqrPage]
})
export class EscaneoqrPageModule {}
