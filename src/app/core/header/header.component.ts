import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoggedInService} from "../services/communication/logged-in.service";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  // Variable to hold login status
  isLoggedIn: boolean = false;

  // Reference to the navigation checkbox input element
  // @ts-ignore
  @ViewChild('naviToggle') naviToggle: ElementRef;

  constructor(
    private loggedIn: LoggedInService,
    private authService: AuthService
  ) {
  }

  // Method to close the navigation menu
  closeNavigationMenu() {
    if (this.naviToggle && this.naviToggle.nativeElement) {
      this.naviToggle.nativeElement.checked = false;
    }
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
    this.closeNavigationMenu();
  }

}
