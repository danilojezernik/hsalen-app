import {Component} from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";
import {NewBlog} from "../../../services/blog/newBlog";
import {trace} from "../../../utils/trace";

@Component({
    selector: 'app-blog-dodaj',
    templateUrl: './blog-add.component.html',
    styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {

    newBlog: NewBlog = new NewBlog()

    constructor(
        private blogService: BlogService
    ) {
    }

    @trace()
    dodajBlog(): void {
        this.blogService.dodajNoviBlog(this.newBlog)
    }

}
