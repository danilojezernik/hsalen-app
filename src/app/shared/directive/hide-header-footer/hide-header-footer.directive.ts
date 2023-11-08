import {Directive, ElementRef, Renderer2} from '@angular/core';
import {SharedServiceService} from "../../services/shared-service.service";

@Directive({
  selector: '[appHideHeaderFooter]'
})
export class HideHeaderFooterDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private sharedService: SharedServiceService
  ) {
    if (this.sharedService.dontShowHeaderFooter) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
