import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookDetailsPage } from './facebook-details.page';

const routes: Routes = [
  {
    path: '',
    component: FacebookDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookDetailsPageRoutingModule {}
