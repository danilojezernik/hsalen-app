/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getMedijstvoMedijstvoGet } from '../fn/medijstvo/get-medijstvo-medijstvo-get';
import { GetMedijstvoMedijstvoGet$Params } from '../fn/medijstvo/get-medijstvo-medijstvo-get';
import { Medijstvo } from '../models/medijstvo';


/**
 * uporablja se prefix /api/medijstvo
 */
@Injectable({ providedIn: 'root' })
export class MedijstvoService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getMedijstvoMedijstvoGet()` */
  static readonly GetMedijstvoMedijstvoGetPath = '/medijstvo/';

  /**
   * Get Medijstvo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMedijstvoMedijstvoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijstvoMedijstvoGet$Response(params?: GetMedijstvoMedijstvoGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Medijstvo>>> {
    return getMedijstvoMedijstvoGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Medijstvo.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMedijstvoMedijstvoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijstvoMedijstvoGet(params?: GetMedijstvoMedijstvoGet$Params, context?: HttpContext): Observable<Array<Medijstvo>> {
    return this.getMedijstvoMedijstvoGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Medijstvo>>): Array<Medijstvo> => r.body)
    );
  }

}
