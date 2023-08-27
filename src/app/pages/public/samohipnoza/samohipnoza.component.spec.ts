import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamohipnozaComponent } from './samohipnoza.component';

describe('SamohipnozaComponent', () => {
  let component: SamohipnozaComponent;
  let fixture: ComponentFixture<SamohipnozaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamohipnozaComponent]
    });
    fixture = TestBed.createComponent(SamohipnozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
