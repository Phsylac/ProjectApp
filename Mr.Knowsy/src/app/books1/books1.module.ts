import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Books1PageRoutingModule } from './books1-routing.module';

import { Books1Page } from './books1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Books1PageRoutingModule
  ],
  declarations: [Books1Page]
})
export class Books1PageModule {}
