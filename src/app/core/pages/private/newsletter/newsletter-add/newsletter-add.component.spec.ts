import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterAddComponent } from './newsletter-add.component';

describe('NewsletterAddComponent', () => {
  let component: NewsletterAddComponent;
  let fixture: ComponentFixture<NewsletterAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterAddComponent]
    });
    fixture = TestBed.createComponent(NewsletterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
