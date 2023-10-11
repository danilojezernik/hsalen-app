import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUrediComponent } from './events-uredi.component';

describe('EventsUrediComponent', () => {
  let component: EventsUrediComponent;
  let fixture: ComponentFixture<EventsUrediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUrediComponent]
    });
    fixture = TestBed.createComponent(EventsUrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
