import {Component, Input} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html'
})
export class HeroDashboardComponent {

  constructor(
    private location: Location
  ) {
  }

  @Input() hero: { admin: string, path: string, action?: string, goBack?: string } | any

  goBack() {
    this.location.back()
  }
}
