import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  isLoggedIn: boolean = false;

  username: string = '';
  password: string = '';

  constructor() {
  }

  goToAdmin() {
  }

}
