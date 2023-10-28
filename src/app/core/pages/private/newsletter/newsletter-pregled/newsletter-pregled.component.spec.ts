import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterPregledComponent } from './newsletter-pregled.component';

describe('NewsletterPregledComponent', () => {
  let component: NewsletterPregledComponent;
  let fixture: ComponentFixture<NewsletterPregledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterPregledComponent]
    });
    fixture = TestBed.createComponent(NewsletterPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
