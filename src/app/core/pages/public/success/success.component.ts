import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-success.scss',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {

  _logService = inject(SendLogService)

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const shouldRedirect = this.router.routerState.snapshot.root.firstChild?.data['shouldRedirect'];
    this._logService.sendPublicLog(`Successfully submitted for newsletter is checked by Client`, 'PUBLIC');

    if (shouldRedirect) {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }
  }
}
