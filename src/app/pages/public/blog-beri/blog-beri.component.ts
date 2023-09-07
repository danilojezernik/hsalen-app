import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../../../data/blog/blog';
import {BlogService} from '../../../services/blog/blog.service';
import {trace} from "../../../utils/trace";
import {ApiService} from "../../../services/api/services/api.service";

@Component({
    selector: 'app-blog-beri',
    templateUrl: './blog-beri.component.html',
    styleUrls: ['./blog-beri.component.css']
})
export class BlogBeriComponent implements OnInit {
    blog: Blog | undefined;

    test_id: string

    constructor(
        private api: ApiService,
        private route: ActivatedRoute
    ) {
        this.test_id = route.snapshot.paramMap.get("test_id") || ""
    }

    @trace()
    ngOnInit(): void {
        this.readBlogById(this.test_id);
    }

    @trace()
    async readBlogById(blogId: string) {
        await this.api.getBlogById(blogId).subscribe(
            (blog: Blog) => {
                this.blog = blog;
            }
        );
    }
}
