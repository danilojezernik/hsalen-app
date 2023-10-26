import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUrediComponent } from './blog-uredi.component';

describe('BlogUrediComponent', () => {
  let component: BlogUrediComponent;
  let fixture: ComponentFixture<BlogUrediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogUrediComponent]
    });
    fixture = TestBed.createComponent(BlogUrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
