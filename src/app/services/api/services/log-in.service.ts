/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { loginLoginPost } from '../fn/log-in/login-login-post';
import { LoginLoginPost$Params } from '../fn/log-in/login-login-post';
import { readItemsLoginGet } from '../fn/log-in/read-items-login-get';
import { ReadItemsLoginGet$Params } from '../fn/log-in/read-items-login-get';


/**
 * uporablja se prefix /api/login - OAuth2
 */
@Injectable({ providedIn: 'root' })
export class LogInService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `readItemsLoginGet()` */
  static readonly ReadItemsLoginGetPath = '/login/';

  /**
   * Read Items.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `readItemsLoginGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  readItemsLoginGet$Response(params?: ReadItemsLoginGet$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return readItemsLoginGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Read Items.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `readItemsLoginGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  readItemsLoginGet(params?: ReadItemsLoginGet$Params, context?: HttpContext): Observable<any> {
    return this.readItemsLoginGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `loginLoginPost()` */
  static readonly LoginLoginPostPath = '/login/';

  /**
   * Login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginLoginPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginLoginPost$Response(params?: LoginLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return loginLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Login.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginLoginPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginLoginPost(params?: LoginLoginPost$Params, context?: HttpContext): Observable<any> {
    return this.loginLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
