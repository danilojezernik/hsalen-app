import {Component} from '@angular/core';
import {trace} from "../../../utils/trace";

@Component({
  selector: 'app-blog-dodaj',
  templateUrl: './blog-add.component.html'
})
export class BlogAddComponent {

  constructor() {
  }

  @trace()
  dodajBlog(): void {
  }


}
