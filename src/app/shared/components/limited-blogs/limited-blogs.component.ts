import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BlogService} from "../../../core/services/api/blog.service";
import {WindowObjectService} from "../../services/window-object/window-object.service";

@Component({
  selector: 'app-limited-blogs',
  templateUrl: './limited-blogs.component.html'
})
export class LimitedBlogsComponent implements OnInit {

  @ViewChild('listItemRight') public listItemRight: ElementRef | undefined;
  private listItemRightAnimated: boolean = false;
  windowObjects = this.windowObject.getWindow()

  limited: any;

  constructor(
    private api: BlogService,
    private windowObject: WindowObjectService
  ) {
  }

  ngOnInit() {
    this.getLimitedBlogs()
  }

  getLimitedBlogs() {
    this.api.getLimitedBlog().subscribe(data => {
      this.limited = data;
    })
  }

  // Animation fade in from left
  @HostListener('window:scroll', ['$event'])
  onScrolling() {
    // Animation for list item 1
    if (this.listItemRight && !this.listItemRightAnimated) {
      const rect = this.listItemRight.nativeElement.getBoundingClientRect();
      if (rect.top <= this.windowObjects.innerHeight) {
        this.listItemRight.nativeElement.classList.add('fadeInRight');
        this.listItemRightAnimated = true;
      }
    }
  }
}
