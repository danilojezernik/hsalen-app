import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipnoterapijaComponent } from './hipnoterapija.component';

describe('HipnoterapijaComponent', () => {
  let component: HipnoterapijaComponent;
  let fixture: ComponentFixture<HipnoterapijaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HipnoterapijaComponent]
    });
    fixture = TestBed.createComponent(HipnoterapijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
