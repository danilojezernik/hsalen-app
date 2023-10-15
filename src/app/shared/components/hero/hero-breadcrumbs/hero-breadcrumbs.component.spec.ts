import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBreadcrumbsComponent } from './hero-breadcrumbs.component';

describe('HeroBreadcrumbsComponent', () => {
  let component: HeroBreadcrumbsComponent;
  let fixture: ComponentFixture<HeroBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBreadcrumbsComponent]
    });
    fixture = TestBed.createComponent(HeroBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
