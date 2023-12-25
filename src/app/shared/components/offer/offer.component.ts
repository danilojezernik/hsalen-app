import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WindowObjectService} from "../../services/window-object/window-object.service";


@Component({
  selector: 'offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent implements OnInit {

  // Animation objects
  @ViewChild('listItemLeft') public listItemLeft: ElementRef | undefined;
  private listItemLeftAnimated: boolean = false;
  windowObjects = this.windowObject.getWindow()

  offer: any;

  constructor(private db: HttpClient, private windowObject: WindowObjectService) {
  }

  ngOnInit() {
    const path: string = 'assets/offer.json'
    this.db.get(path).subscribe(response => {
      this.offer = response;
    })
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
  }


}
