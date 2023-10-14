import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

const routesToShowGoBack: string[] = ['/blog-pregled', '/blog/edit/:id', '/mediji-pregled', '/email-pregled', '/events-pregled'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  shouldShowGoBack: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.shouldShowGoBack = routesToShowGoBack.includes(this.router.url);
    });
  }


}
