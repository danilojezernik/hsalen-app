import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasnovidnostComponent } from './jasnovidnost.component';

describe('JasnovidnostComponent', () => {
  let component: JasnovidnostComponent;
  let fixture: ComponentFixture<JasnovidnostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JasnovidnostComponent]
    });
    fixture = TestBed.createComponent(JasnovidnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
