import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIdComponent } from './email-id.component';

describe('EmailIdComponent', () => {
  let component: EmailIdComponent;
  let fixture: ComponentFixture<EmailIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailIdComponent]
    });
    fixture = TestBed.createComponent(EmailIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
