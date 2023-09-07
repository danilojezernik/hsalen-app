/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getHipnoterapijaHipnoterapijaGet } from '../fn/hipnoterapija/get-hipnoterapija-hipnoterapija-get';
import { GetHipnoterapijaHipnoterapijaGet$Params } from '../fn/hipnoterapija/get-hipnoterapija-hipnoterapija-get';
import { Hipnoterapija } from '../models/hipnoterapija';


/**
 * uporablja se prefix /api/hipnoterapija
 */
@Injectable({ providedIn: 'root' })
export class HipnoterapijaService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getHipnoterapijaHipnoterapijaGet()` */
  static readonly GetHipnoterapijaHipnoterapijaGetPath = '/hipnoterapija/';

  /**
   * Get Hipnoterapija.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHipnoterapijaHipnoterapijaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHipnoterapijaHipnoterapijaGet$Response(params?: GetHipnoterapijaHipnoterapijaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Hipnoterapija>>> {
    return getHipnoterapijaHipnoterapijaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Hipnoterapija.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHipnoterapijaHipnoterapijaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHipnoterapijaHipnoterapijaGet(params?: GetHipnoterapijaHipnoterapijaGet$Params, context?: HttpContext): Observable<Array<Hipnoterapija>> {
    return this.getHipnoterapijaHipnoterapijaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Hipnoterapija>>): Array<Hipnoterapija> => r.body)
    );
  }

}
