import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Books1Page } from './books1.page';

const routes: Routes = [
  {
    path: '',
    component: Books1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Books1PageRoutingModule {}
