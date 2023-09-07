/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getJasnovidnostJasnovidnostGet } from '../fn/jasnovidnost/get-jasnovidnost-jasnovidnost-get';
import { GetJasnovidnostJasnovidnostGet$Params } from '../fn/jasnovidnost/get-jasnovidnost-jasnovidnost-get';
import { Jasnovidnost } from '../models/jasnovidnost';


/**
 * uporablja se prefix /api/jasnovidnost
 */
@Injectable({ providedIn: 'root' })
export class JasnovidnostService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getJasnovidnostJasnovidnostGet()` */
  static readonly GetJasnovidnostJasnovidnostGetPath = '/jasnovidnost/';

  /**
   * Get Jasnovidnost.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getJasnovidnostJasnovidnostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getJasnovidnostJasnovidnostGet$Response(params?: GetJasnovidnostJasnovidnostGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Jasnovidnost>>> {
    return getJasnovidnostJasnovidnostGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Jasnovidnost.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getJasnovidnostJasnovidnostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getJasnovidnostJasnovidnostGet(params?: GetJasnovidnostJasnovidnostGet$Params, context?: HttpContext): Observable<Array<Jasnovidnost>> {
    return this.getJasnovidnostJasnovidnostGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Jasnovidnost>>): Array<Jasnovidnost> => r.body)
    );
  }

}
