import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OwnCalendarComponent } from './own-calendar.component';
import { OwnCalendarRoutingModule } from './own-calendar-routing.module';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import 'flatpickr/dist/flatpickr.css';


@NgModule({
  imports: [
    OwnCalendarRoutingModule,
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [ OwnCalendarComponent ]
})
export class OwnCalendarModule { }
