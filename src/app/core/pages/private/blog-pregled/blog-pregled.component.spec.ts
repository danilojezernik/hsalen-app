import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPregledComponent } from './blog-pregled.component';

describe('BlogPregledComponent', () => {
  let component: BlogPregledComponent;
  let fixture: ComponentFixture<BlogPregledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPregledComponent]
    });
    fixture = TestBed.createComponent(BlogPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
