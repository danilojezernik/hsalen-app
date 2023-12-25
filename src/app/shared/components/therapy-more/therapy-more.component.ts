import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {WindowObjectService} from "../../services/window-object/window-object.service";

@Component({
  selector: 'therapy-more',
  templateUrl: './therapy-more.component.html'
})
export class TherapyMoreComponent {

  // Animation objects
  @ViewChild('listItemLeft') public listItemLeft: ElementRef | undefined;
  @ViewChild('listItemLeft1') public listItemLeft1: ElementRef | undefined;
  @ViewChild('listItemLeft2') public listItemLeft2: ElementRef | undefined;
  private listItemLeftAnimated: boolean = false;
  private listItemLeft1Animated: boolean = false;
  private listItemLeft2Animated: boolean = false;
  windowObjects = this.windowObject.getWindow()

  constructor(private windowObject: WindowObjectService) {
  }

  // Animation fade in from left
  @HostListener('window:scroll', ['$event'])
  onScrolling() {
    // Animation for list item 1
    if (this.listItemLeft && !this.listItemLeftAnimated) {
      const rect = this.listItemLeft.nativeElement.getBoundingClientRect();
      if (rect.top <= this.windowObjects.innerHeight) {
        this.listItemLeft.nativeElement.classList.add('fadeInLeft');
        this.listItemLeftAnimated = true;
      }
    }

    // Animation for list item 1
    if (this.listItemLeft1 && !this.listItemLeft1Animated) {
      const rect = this.listItemLeft1.nativeElement.getBoundingClientRect();
      if (rect.top <= this.windowObjects.innerHeight) {
        this.listItemLeft1.nativeElement.classList.add('fadeInLeft1');
        this.listItemLeft1Animated = true;
      }
    }

    // Animation for list item 1
    if (this.listItemLeft2 && !this.listItemLeft2Animated) {
      const rect = this.listItemLeft2.nativeElement.getBoundingClientRect();
      if (rect.top <= this.windowObjects.innerHeight) {
        this.listItemLeft2.nativeElement.classList.add('fadeInLeft2');
        this.listItemLeft2Animated = true;
      }
    }
  }

}
