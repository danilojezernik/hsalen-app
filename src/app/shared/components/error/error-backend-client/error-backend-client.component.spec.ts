import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBackendClientComponent } from './error-backend-client.component';

describe('ErrorBackendClientComponent', () => {
  let component: ErrorBackendClientComponent;
  let fixture: ComponentFixture<ErrorBackendClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorBackendClientComponent]
    });
    fixture = TestBed.createComponent(ErrorBackendClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
