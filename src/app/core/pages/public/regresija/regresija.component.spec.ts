import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresijaComponent } from './regresija.component';

describe('RegresijaComponent', () => {
  let component: RegresijaComponent;
  let fixture: ComponentFixture<RegresijaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegresijaComponent]
    });
    fixture = TestBed.createComponent(RegresijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
