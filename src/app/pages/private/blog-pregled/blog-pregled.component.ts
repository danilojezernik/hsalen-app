import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";
import {Blog} from "../../../data/blog/blog";
import {Subject} from "rxjs";
import {takeUntil} from 'rxjs/operators';
import {trace} from "../../../utils/trace";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-pregled',
  templateUrl: './blog-pregled.component.html',
  styleUrls: ['./blog-pregled.component.css']
})
export class BlogPregledComponent implements OnInit, OnDestroy {

  blog: any[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {
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
  deleteOneBlog(id: Blog) {
    this.blogService.deleteBlogById(id).subscribe(() => {
      window.location.reload()
    })
  }

  @trace()
  editBlog(blog: Blog): void {
    const blogId = blog._id["$oid"];
    this.router.navigate(['/blog/edit', blogId]);
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
