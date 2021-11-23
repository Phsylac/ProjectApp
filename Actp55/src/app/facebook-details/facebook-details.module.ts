import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebookDetailsPageRoutingModule } from './facebook-details-routing.module';

import { FacebookDetailsPage } from './facebook-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacebookDetailsPageRoutingModule
  ],
  declarations: [FacebookDetailsPage]
})
export class FacebookDetailsPageModule {}
