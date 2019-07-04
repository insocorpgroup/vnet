// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrentEventComponent } from './current-event.component';
import { CurrentEventRoutingModule } from './current-event-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CurrentEventRoutingModule
  ],
  declarations: [
      CurrentEventComponent
  ]
})
export class CurrentEventModule { }
