import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GetIdComponent} from './get-id.component';

describe('EmailIdComponent', () => {
  let component: GetIdComponent;
  let fixture: ComponentFixture<GetIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetIdComponent]
    });
    fixture = TestBed.createComponent(GetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
