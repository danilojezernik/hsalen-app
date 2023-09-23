import {Component, Inject, OnInit} from '@angular/core';
import {Blog} from "../../../../core/models/blog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BlogService} from "../../../../core/services/api/blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-edit-add-blog',
    templateUrl: './edit-add-blog.component.html'
})
export class EditAddBlogComponent implements OnInit {
    blog: Blog;
    blogId: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private api: BlogService,
        private route: ActivatedRoute,
    ) {
        this.blog = {...data.blog}; // Copy the blog data
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.blogId = params['id'];
        });
    }

    saveChanges() {
        // Call your API service to update the blog post
        this.api.editBlog(this.blogId, this.blog).subscribe(
            () => {
                // Handle successful update
                console.log('Blog updated successfully');
            },
            (error) => {
                console.error('Error updating blog', error);
            }
        );
    }

}
