import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedijstvoComponent } from './medijstvo.component';

describe('MedijstvoComponent', () => {
  let component: MedijstvoComponent;
  let fixture: ComponentFixture<MedijstvoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedijstvoComponent]
    });
    fixture = TestBed.createComponent(MedijstvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
