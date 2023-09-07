import {Component} from '@angular/core';
import {trace} from "../../../utils/trace";

@Component({
    selector: 'app-blog-dodaj',
    templateUrl: './blog-add.component.html',
    styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {

    constructor(
        private api: ApiService
    ) {
    }

    @trace()
    dodajBlog(): void {
        this.blogService.dodajNoviBlog(this.newBlog)
    }


}
