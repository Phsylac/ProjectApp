import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingSchedulePage } from './listing-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: ListingSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingSchedulePageRoutingModule {}
