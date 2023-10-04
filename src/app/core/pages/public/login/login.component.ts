import {Component} from '@angular/core';
import {AuthService} from "../../../services/api/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * Method to log the user in by making a login request.
   * Calls the AuthService's login method and handles the response.
   */
  logIn() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          // Store the access token
          this.authService.setAccessToken(response.access_token);
          console.log('Login successful');
          // Redirect to admin route after successful login
          this.router.navigate(['admin']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }


}
