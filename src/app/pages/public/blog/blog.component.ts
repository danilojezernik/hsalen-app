import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {exe} from "../../../utils/exe";
import {ApiService} from "../../../services/api/services/api.service";
import {Blog} from "../../../services/api/models/blog";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

    blog: Blog[] = [];

    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private api: ApiService) {
    }

    @trace()
    async ngOnInit() {
        this.blog = await exe(this.api.getBlogBlogGet())

    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
