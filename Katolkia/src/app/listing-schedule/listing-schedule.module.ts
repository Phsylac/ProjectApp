import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingSchedulePageRoutingModule } from './listing-schedule-routing.module';

import { ListingSchedulePage } from './listing-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingSchedulePageRoutingModule
  ],
  declarations: [ListingSchedulePage]
})
export class ListingSchedulePageModule {}
