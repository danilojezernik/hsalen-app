import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private BASE_PATH_LOGIN = environment.backUrl + '/api/login'

  isLoggedIn: boolean = false;

  username: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  goToAdmin() {
  }

}
