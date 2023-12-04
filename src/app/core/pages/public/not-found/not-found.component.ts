import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  _logService = inject(SendLogService)

  heroData = {
    naslov: 'Stran ni najdena',
    path: ''
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const shouldRedirect = this.router.routerState.snapshot.root.firstChild?.data['shouldRedirect'];
    this._logService.sendPublicLog(`Not Found ** by Client`, 'PUBLIC');

    if (shouldRedirect) {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    }

    this.heroData.path = this.router.url.slice(1);
  }
}
