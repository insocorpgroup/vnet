import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentEventComponent } from './current-event.component';



const routes: Routes = [
  {
    path: '',
    component: CurrentEventComponent,
    data: {
      title: 'Event'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentEventRoutingModule {}
