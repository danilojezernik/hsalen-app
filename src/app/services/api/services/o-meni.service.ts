/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getMedijiOmeniGet } from '../fn/o-meni/get-mediji-omeni-get';
import { GetMedijiOmeniGet$Params } from '../fn/o-meni/get-mediji-omeni-get';
import { Mediji } from '../models/mediji';


/**
 * uporablja se prefix /api/omeni in /api/mediji
 */
@Injectable({ providedIn: 'root' })
export class OMeniService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getMedijiOmeniGet()` */
  static readonly GetMedijiOmeniGetPath = '/omeni/';

  /**
   * Get Mediji.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMedijiOmeniGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijiOmeniGet$Response(params?: GetMedijiOmeniGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Mediji>>> {
    return getMedijiOmeniGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Mediji.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMedijiOmeniGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijiOmeniGet(params?: GetMedijiOmeniGet$Params, context?: HttpContext): Observable<Array<Mediji>> {
    return this.getMedijiOmeniGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Mediji>>): Array<Mediji> => r.body)
    );
  }

}
