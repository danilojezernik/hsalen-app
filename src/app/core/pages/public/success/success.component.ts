import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-success.scss',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const shouldRedirect = this.router.routerState.snapshot.root.firstChild?.data['shouldRedirect'];

    if (shouldRedirect) {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }
  }
}
