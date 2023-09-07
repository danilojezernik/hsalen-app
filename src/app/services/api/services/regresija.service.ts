/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getRegresijaRegresijaGet } from '../fn/regresija/get-regresija-regresija-get';
import { GetRegresijaRegresijaGet$Params } from '../fn/regresija/get-regresija-regresija-get';
import { Regresija } from '../models/regresija';


/**
 * uporablja se prefix /api/regresija
 */
@Injectable({ providedIn: 'root' })
export class RegresijaService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRegresijaRegresijaGet()` */
  static readonly GetRegresijaRegresijaGetPath = '/regresija/';

  /**
   * Get Regresija.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRegresijaRegresijaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegresijaRegresijaGet$Response(params?: GetRegresijaRegresijaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Regresija>>> {
    return getRegresijaRegresijaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Regresija.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRegresijaRegresijaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegresijaRegresijaGet(params?: GetRegresijaRegresijaGet$Params, context?: HttpContext): Observable<Array<Regresija>> {
    return this.getRegresijaRegresijaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Regresija>>): Array<Regresija> => r.body)
    );
  }

}
