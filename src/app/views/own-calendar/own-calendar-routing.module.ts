import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnCalendarComponent } from './own-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: OwnCalendarComponent,
    data: {
      title: 'Calendar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnCalendarRoutingModule {}
