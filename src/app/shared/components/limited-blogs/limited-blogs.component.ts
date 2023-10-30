import {Component, OnInit} from '@angular/core';
import {BlogService} from "../../../core/services/api/blog.service";

@Component({
  selector: 'app-limited-blogs',
  templateUrl: './limited-blogs.component.html'
})
export class LimitedBlogsComponent implements OnInit {


  limited: any;

  constructor(
    private api: BlogService
  ) {
  }

  ngOnInit() {
    this.getLimitedBlogs()
  }

  getLimitedBlogs() {
    this.api.getLimitedBlog().subscribe(data => {
      this.limited = data;
    })
  }
}
