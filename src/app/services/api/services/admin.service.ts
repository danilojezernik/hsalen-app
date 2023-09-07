/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { postAdminPost } from '../fn/admin/post-admin-post';
import { PostAdminPost$Params } from '../fn/admin/post-admin-post';


/**
 * uporablja se prefix /api/admin -> uporablja se za redirect
 */
@Injectable({ providedIn: 'root' })
export class AdminService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `postAdminPost()` */
  static readonly PostAdminPostPath = '/admin/';

  /**
   * Post.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAdminPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  postAdminPost$Response(params?: PostAdminPost$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return postAdminPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Post.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postAdminPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postAdminPost(params?: PostAdminPost$Params, context?: HttpContext): Observable<any> {
    return this.postAdminPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
