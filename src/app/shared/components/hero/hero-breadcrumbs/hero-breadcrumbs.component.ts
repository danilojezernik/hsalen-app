import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-breadcrumbs',
  templateUrl: './hero-breadcrumbs.component.html'
})
export class HeroBreadcrumbsComponent {

  @Input() hero: { naslov: string, path: string, blog?: string } | any

}
