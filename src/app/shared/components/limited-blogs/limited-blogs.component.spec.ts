import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedBlogsComponent } from './limited-blogs.component';

describe('LimitedBlogsComponent', () => {
  let component: LimitedBlogsComponent;
  let fixture: ComponentFixture<LimitedBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitedBlogsComponent]
    });
    fixture = TestBed.createComponent(LimitedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
