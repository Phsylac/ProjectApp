import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebooksPageRoutingModule } from './facebooks-routing.module';

import { FacebooksPage } from './facebooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacebooksPageRoutingModule
  ],
  declarations: [FacebooksPage]
})
export class FacebooksPageModule {}
