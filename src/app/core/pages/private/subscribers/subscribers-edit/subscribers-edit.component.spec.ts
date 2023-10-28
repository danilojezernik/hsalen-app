import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersEditComponent } from './subscribers-edit.component';

describe('SubscribersEditComponent', () => {
  let component: SubscribersEditComponent;
  let fixture: ComponentFixture<SubscribersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribersEditComponent]
    });
    fixture = TestBed.createComponent(SubscribersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
