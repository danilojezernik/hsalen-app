import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  /**
   * Intercepts HTTP requests to add the access token to the Authorization header.
   * @param request The HTTP request being intercepted.
   * @param next The HTTP handler for the request.
   * @returns An observable of the HTTP event.
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the access token from the AuthService
    const accessToken = this.authService.getAccessToken();

    // If an access token is available, add it to the request headers
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    // Pass the modified request to the next handler
    return next.handle(request);
  }
}
