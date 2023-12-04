import {Component, inject} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    '.example-form {' +
    '  min-width: 150px;' +
    '  max-width: 500px;' +
    '  width: 100%;' +
    '}' +
    '.example-full-width {' +
    '  width: 100%;' +
    '}'
  ]
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  _logService = inject(SendLogService)

  heroData = {
    naslov: 'Login',
    path: 'login'
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * Method to log the user in by making a login request.
   * Calls the AuthService's login method and handles the response.
   */
  logIn() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Store the access token
        this.authService.setAccessToken(response.access_token);

        this._logService.sendPublicLog(`Login is checked`, 'PUBLIC');

        // Redirect to admin route after successful login
        this.router.navigate(['admin']);
      },
      (error) => {
        console.error('Login failed:', error);
        this._logService.sendPublicLog(`Error: Login failed: ` + error.message, 'PUBLIC');
      }
    );
  }


}
