import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private BASE_PATH = environment.backUrl + '/api/login'

  isLoggedIn: boolean = false;

  username: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: LoginService
  ) {
  }

  goToAdmin() {
    this.auth.login(this.username, this.password)
  }

}
