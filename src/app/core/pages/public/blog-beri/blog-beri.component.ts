import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from "../../../services/api/blog.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-blog-beri',
  templateUrl: './blog-beri.component.html'
})
export class BlogBeriComponent implements OnInit {

  blog: any;

  constructor(
    private api: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id') || '';
    if (blogId) {
      this.getBlogById(blogId)
    }
  }

  getBlogById(blogId: string) {
    this.api.getBlogById(blogId).subscribe(
      data => {
        this.blog = data
      }
    )
  }

  goBack() {
    this.location.back()
  }

}
