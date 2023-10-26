import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersPregledComponent } from './subscribers-pregled.component';

describe('SubscribersPregledComponent', () => {
  let component: SubscribersPregledComponent;
  let fixture: ComponentFixture<SubscribersPregledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribersPregledComponent]
    });
    fixture = TestBed.createComponent(SubscribersPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
