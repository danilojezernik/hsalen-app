import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPregledComponent } from './events-pregled.component';

describe('EventsPregledComponent', () => {
  let component: EventsPregledComponent;
  let fixture: ComponentFixture<EventsPregledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsPregledComponent]
    });
    fixture = TestBed.createComponent(EventsPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
