import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnCalendarComponent } from './own-calendar.component';

describe('OwnCalendarComponent', () => {
  let component: OwnCalendarComponent;
  let fixture: ComponentFixture<OwnCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
