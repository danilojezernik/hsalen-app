import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../../../services/blog/blog';
import {BlogService} from '../../../services/blog/blog.service';
import {trace} from "../../../utils/trace";

@Component({
  selector: 'app-blog-beri',
  templateUrl: './blog-beri.component.html',
  styleUrls: ['./blog-beri.component.css']
})
export class BlogBeriComponent implements OnInit {
  blog: Blog | undefined;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {
  }

  @trace()
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const blogId = params.get('id');
      if (blogId) {
        this.readBlogById(blogId);
      }
    });
  }

  @trace()
  readBlogById(blogId: string): void {
    this.blogService.getBlogById(blogId).subscribe(
      (blog: Blog) => {
        this.blog = blog;
      }
    );
  }
}
