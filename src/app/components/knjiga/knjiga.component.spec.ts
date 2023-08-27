import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaComponent } from './knjiga.component';

describe('KnjigaComponent', () => {
  let component: KnjigaComponent;
  let fixture: ComponentFixture<KnjigaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KnjigaComponent]
    });
    fixture = TestBed.createComponent(KnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
