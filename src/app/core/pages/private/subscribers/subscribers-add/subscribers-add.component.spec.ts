import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersAddComponent } from './subscribers-add.component';

describe('SubscribersAddComponent', () => {
  let component: SubscribersAddComponent;
  let fixture: ComponentFixture<SubscribersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribersAddComponent]
    });
    fixture = TestBed.createComponent(SubscribersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
