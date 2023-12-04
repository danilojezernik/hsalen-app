import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from "../../../services/api/blog.service";
import {Location} from "@angular/common";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-blog-beri',
  templateUrl: './blog-beri.component.html'
})
export class BlogBeriComponent implements OnInit {

  blog: any;
  _logService = inject(SendLogService)

  heroData = {
    naslov: '',
    blog: 'Blog',
    path: ''
  }

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
        // Load blog data when component is initialized
        this._logService.sendPublicLog(`Reading blog by id: ${blogId}`, 'PUBLIC');
        this.heroData.naslov = data.naslov;
        this.heroData.path = data.naslov;
      }
    )
  }

  goBack() {
    this.location.back()
  }

}
