import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  setAccessToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getAccessToken(): string {
    return localStorage.getItem('token') || ''
  }

  clear() {
    localStorage.clear()
  }


  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<any>(`${environment.backUrl}/login`, formData);
  }
}
