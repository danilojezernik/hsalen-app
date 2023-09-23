import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddBlogComponent } from './edit-add-blog.component';

describe('EditAddBlogComponent', () => {
  let component: EditAddBlogComponent;
  let fixture: ComponentFixture<EditAddBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddBlogComponent]
    });
    fixture = TestBed.createComponent(EditAddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
