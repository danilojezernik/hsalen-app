import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBackendComponent } from './error-backend.component';

describe('ErrorBackendComponent', () => {
  let component: ErrorBackendComponent;
  let fixture: ComponentFixture<ErrorBackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorBackendComponent]
    });
    fixture = TestBed.createComponent(ErrorBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
