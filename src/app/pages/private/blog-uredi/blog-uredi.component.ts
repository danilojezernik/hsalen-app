import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../../../data/blog/blog';
import {BlogService} from '../../../services/blog/blog.service';
import {trace} from "../../../utils/trace";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-blog-uredi',
  templateUrl: './blog-uredi.component.html',
  styleUrls: ['./blog-uredi.component.css']
})
export class BlogUrediComponent implements OnInit {

  blog: Blog | undefined;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  @trace()
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const blogId = params.get('id');
      if (blogId) {
        this.getBlogDetails(blogId);
      }
    });
  }

  @trace()
  getBlogDetails(blogId: string): void {
    this.blogService.getBlogById(blogId).subscribe(
      (blog: Blog) => {
        this.blog = blog;
      }
    );
  }

  @trace()
  editBlog(): void {
    if (this.blog) {
      this.blogService.editBlog(this.blog._id['$oid'], this.blog)
        .subscribe(() => {
          this.router.navigate(['/blog-pregled']);
        });
    }
  }

}
