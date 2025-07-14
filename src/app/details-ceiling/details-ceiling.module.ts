import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailsCeilingPageRoutingModule } from './details-ceiling-routing.module';
import { DetailsCeilingPage } from './details-ceiling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCeilingPageRoutingModule
  ],
  declarations: [DetailsCeilingPage]
})
export class DetailsCeilingPageModule {}