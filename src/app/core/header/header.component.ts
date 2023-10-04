import {Component, OnInit} from '@angular/core';
import {LoggedInService} from "../services/communication/logged-in.service";
import {AuthService} from "../services/api/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private loggedIn: LoggedInService, private authService: AuthService) {
  }

  ngOnInit() {
    this.loggedIn.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logOut() {
    this.authService.clear();
  }

}
