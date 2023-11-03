import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyMoreComponent } from './therapy-more.component';

describe('TherapyMoreComponent', () => {
  let component: TherapyMoreComponent;
  let fixture: ComponentFixture<TherapyMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TherapyMoreComponent]
    });
    fixture = TestBed.createComponent(TherapyMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
