import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  heroData = {
    admin: 'Admin',
    path: ''
  }

  constructor(private router: Router) {
    this.heroData.path = this.router.url.slice(1);
  }


}
