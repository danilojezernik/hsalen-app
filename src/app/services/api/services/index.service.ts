/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getIndexIndexGet } from '../fn/index/get-index-index-get';
import { GetIndexIndexGet$Params } from '../fn/index/get-index-index-get';
import { getKnjigaIndexKnjigaGet } from '../fn/index/get-knjiga-index-knjiga-get';
import { GetKnjigaIndexKnjigaGet$Params } from '../fn/index/get-knjiga-index-knjiga-get';
import { Index } from '../models/index';
import { Knjiga } from '../models/knjiga';


/**
 * Index vsebuje podatke za knjigo in za začeten text
 */
@Injectable({ providedIn: 'root' })
export class IndexService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getIndexIndexGet()` */
  static readonly GetIndexIndexGetPath = '/index/';

  /**
   * Get Index.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIndexIndexGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIndexIndexGet$Response(params?: GetIndexIndexGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Index>>> {
    return getIndexIndexGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Index.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIndexIndexGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIndexIndexGet(params?: GetIndexIndexGet$Params, context?: HttpContext): Observable<Array<Index>> {
    return this.getIndexIndexGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Index>>): Array<Index> => r.body)
    );
  }

  /** Path part for operation `getKnjigaIndexKnjigaGet()` */
  static readonly GetKnjigaIndexKnjigaGetPath = '/index/knjiga';

  /**
   * Get Knjiga.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKnjigaIndexKnjigaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKnjigaIndexKnjigaGet$Response(params?: GetKnjigaIndexKnjigaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Knjiga>>> {
    return getKnjigaIndexKnjigaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Knjiga.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getKnjigaIndexKnjigaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKnjigaIndexKnjigaGet(params?: GetKnjigaIndexKnjigaGet$Params, context?: HttpContext): Observable<Array<Knjiga>> {
    return this.getKnjigaIndexKnjigaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Knjiga>>): Array<Knjiga> => r.body)
    );
  }

}
