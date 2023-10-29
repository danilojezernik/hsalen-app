import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {SharedServiceService} from "./shared/services/shared-service.service";

const routesToShowGoBack: string[] = ['/blog-pregled', '/blog/edit/:id', '/mediji-pregled', '/email-pregled', '/events-pregled', '/subscribers', '/newsletter-pregled'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  shouldShowGoBack: boolean = true;

  constructor(private router: Router, public sharedService: SharedServiceService) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.shouldShowGoBack = routesToShowGoBack.includes(this.router.url);

      // Check if the current route is the "success" component
      this.sharedService.dontShowHeaderFooter = this.router.url === '/success';
    });
  }


}
