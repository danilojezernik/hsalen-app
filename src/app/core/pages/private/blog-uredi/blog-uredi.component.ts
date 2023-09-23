import {Component, OnInit} from '@angular/core';
import {Blog} from "../../../models/blog";
import {BlogService} from "../../../services/api/blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-blog-uredi',
    templateUrl: './blog-uredi.component.html',
})
export class BlogUrediComponent implements OnInit {

    blogId: any;
    // @ts-ignore
    blog: Blog = {naslov: '', podnaslov: '', tag: '', vsebina: ''};

    constructor(
        private api: BlogService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.blogId = params['id'];
            this.loadBlog();
        });
    }

    loadBlog() {
        this.api.getBlogById(this.blogId).subscribe(
            (data) => {
                this.blog = data;
            },
            (error) => {
                console.error('Error getting blog', error);
            }
        );
    }

}
