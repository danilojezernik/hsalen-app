/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getSamohipnozaSamohipnozaGet } from '../fn/samohipnoza/get-samohipnoza-samohipnoza-get';
import { GetSamohipnozaSamohipnozaGet$Params } from '../fn/samohipnoza/get-samohipnoza-samohipnoza-get';
import { Samohipnoza } from '../models/samohipnoza';


/**
 * uporablja se prefix /api/samohipnoza
 */
@Injectable({ providedIn: 'root' })
export class SamohipnozaService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSamohipnozaSamohipnozaGet()` */
  static readonly GetSamohipnozaSamohipnozaGetPath = '/samohipnoza/';

  /**
   * Get Samohipnoza.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSamohipnozaSamohipnozaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSamohipnozaSamohipnozaGet$Response(params?: GetSamohipnozaSamohipnozaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Samohipnoza>>> {
    return getSamohipnozaSamohipnozaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Samohipnoza.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSamohipnozaSamohipnozaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSamohipnozaSamohipnozaGet(params?: GetSamohipnozaSamohipnozaGet$Params, context?: HttpContext): Observable<Array<Samohipnoza>> {
    return this.getSamohipnozaSamohipnozaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Samohipnoza>>): Array<Samohipnoza> => r.body)
    );
  }

}
