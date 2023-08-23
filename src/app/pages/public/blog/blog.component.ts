import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";
import {Subject} from "rxjs";
import {takeUntil} from 'rxjs/operators';
import {trace} from "../../../utils/trace";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  blog: any[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private blogService: BlogService) {
  }

  @trace()
  ngOnInit(): void {
    this.blogService.getBlogAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.blog = data;
      })
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
