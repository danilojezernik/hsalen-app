import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {LoggedInService} from "../communication/logged-in.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private loggedIn: LoggedInService) {
  }

  setAccessToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedIn.isLoggedIn(true)
  }

  getAccessToken(): string {
    return localStorage.getItem('token') || ''
  }

  clear() {
    localStorage.clear();
    this.loggedIn.isLoggedIn(false)
  }


  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<any>(`${environment.backUrl}/login`, formData);
  }

}
