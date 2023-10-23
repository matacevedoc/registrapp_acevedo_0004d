import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechasferPageRoutingModule } from './fechasfer-routing.module';

import { FechasferPage } from './fechasfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechasferPageRoutingModule
  ],
  declarations: [FechasferPage]
})
export class FechasferPageModule {}
