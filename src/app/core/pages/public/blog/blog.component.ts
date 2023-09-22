import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {Blog} from "../../../models/blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit, OnDestroy {

  blog: Blog[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  @trace()
  ngOnInit() {
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
