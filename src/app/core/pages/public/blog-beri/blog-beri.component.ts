import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from "../../../services/api/blog.service";

@Component({
    selector: 'app-blog-beri',
    templateUrl: './blog-beri.component.html'
})
export class BlogBeriComponent implements OnInit {

    blog: any; // Initialize with null as there's no blog data yet

    constructor(
        private api: BlogService,
        private route: ActivatedRoute
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

}
