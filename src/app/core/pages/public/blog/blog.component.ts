import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {BlogService} from "../../../services/api/blog.service";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit, OnDestroy {

    blog: any;

    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private api: BlogService) {
    }

    @trace()
    ngOnInit() {
        this.loadAllBlog()
    }

    loadAllBlog() {
        this.api.getAllBlog().subscribe(
            (data) => {
                this.blog = data
            }
        )
    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
