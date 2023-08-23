import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBeriComponent } from './blog-beri.component';

describe('BlogBeriComponent', () => {
  let component: BlogBeriComponent;
  let fixture: ComponentFixture<BlogBeriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogBeriComponent]
    });
    fixture = TestBed.createComponent(BlogBeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
