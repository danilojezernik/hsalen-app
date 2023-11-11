import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  heroData = {
    naslov: 'Stran ni najdena',
    path: ''
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const shouldRedirect = this.router.routerState.snapshot.root.firstChild?.data['shouldRedirect'];

    if (shouldRedirect) {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }

    this.heroData.path = this.router.url.slice(1);
  }
}
