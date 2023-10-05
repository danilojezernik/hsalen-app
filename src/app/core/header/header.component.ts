import {Component, OnInit} from '@angular/core';
import {LoggedInService} from "../services/communication/logged-in.service";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  // Variable to hold login status
  isLoggedIn: boolean = false;

  constructor(
    private loggedIn: LoggedInService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    // Subscribe to changes in login status
    this.loggedIn.isLoggedIn$.subscribe((loggedIn) => {
      // Update the login status when it changes
      this.isLoggedIn = loggedIn;
    });
  }

  /**
   * Method to log the user out.
   * Calls the clear method in AuthService when logging out.
   */
  logOut() {
    this.authService.clear();
  }

}
