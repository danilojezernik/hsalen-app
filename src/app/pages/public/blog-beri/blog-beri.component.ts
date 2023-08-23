import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../../../services/blog/blog';
import {BlogService} from '../../../services/blog/blog.service';

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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        const blogId = params.get('id');
        if (blogId) {
          this.getBlogDetails(blogId);
        }
      },
      error => {
        console.error('Error fetching blog details:', error);
      });
  }

  getBlogDetails(blogId: string): void {
    this.blogService.getBlogById(blogId).subscribe(
      (blog: Blog) => {
        this.blog = blog;
      },
      error => {
        console.error('Error fetching blog details:', error);
      }
    );
  }
}
