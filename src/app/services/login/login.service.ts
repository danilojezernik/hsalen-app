import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private BASE_PATH = environment.backUrl + '/api/login'

  isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(username: string, password: string): void {
    this.http.post<any>(`${this.BASE_PATH}`, {username, password})
      .subscribe(() => {
        this.router.navigate(['/blog']);
      })
  }

  logout() {

  }
  
}
