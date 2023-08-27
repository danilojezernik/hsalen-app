/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteApiBlogDeleteId } from '../fn/operations/delete-api-blog-delete-id';
import { DeleteApiBlogDeleteId$Params } from '../fn/operations/delete-api-blog-delete-id';
import { deleteApiErrorDeleteAll } from '../fn/operations/delete-api-error-delete-all';
import { DeleteApiErrorDeleteAll$Params } from '../fn/operations/delete-api-error-delete-all';
import { deleteApiErrorDeleteId } from '../fn/operations/delete-api-error-delete-id';
import { DeleteApiErrorDeleteId$Params } from '../fn/operations/delete-api-error-delete-id';
import { getApiBlog } from '../fn/operations/get-api-blog';
import { GetApiBlog$Params } from '../fn/operations/get-api-blog';
import { getApiBlogId } from '../fn/operations/get-api-blog-id';
import { GetApiBlogId$Params } from '../fn/operations/get-api-blog-id';
import { getApiError } from '../fn/operations/get-api-error';
import { GetApiError$Params } from '../fn/operations/get-api-error';
import { getApiErrorId } from '../fn/operations/get-api-error-id';
import { GetApiErrorId$Params } from '../fn/operations/get-api-error-id';
import { getApiHipnoterapija } from '../fn/operations/get-api-hipnoterapija';
import { GetApiHipnoterapija$Params } from '../fn/operations/get-api-hipnoterapija';
import { getApiIndex } from '../fn/operations/get-api-index';
import { GetApiIndex$Params } from '../fn/operations/get-api-index';
import { getApiIndexKnjiga } from '../fn/operations/get-api-index-knjiga';
import { GetApiIndexKnjiga$Params } from '../fn/operations/get-api-index-knjiga';
import { getApiJasnovidnost } from '../fn/operations/get-api-jasnovidnost';
import { GetApiJasnovidnost$Params } from '../fn/operations/get-api-jasnovidnost';
import { getApiMediji } from '../fn/operations/get-api-mediji';
import { GetApiMediji$Params } from '../fn/operations/get-api-mediji';
import { getApiMedijstvo } from '../fn/operations/get-api-medijstvo';
import { GetApiMedijstvo$Params } from '../fn/operations/get-api-medijstvo';
import { getApiOmeni } from '../fn/operations/get-api-omeni';
import { GetApiOmeni$Params } from '../fn/operations/get-api-omeni';
import { getApiRegresija } from '../fn/operations/get-api-regresija';
import { GetApiRegresija$Params } from '../fn/operations/get-api-regresija';
import { getApiSamohipnoza } from '../fn/operations/get-api-samohipnoza';
import { GetApiSamohipnoza$Params } from '../fn/operations/get-api-samohipnoza';
import { postApiBlog } from '../fn/operations/post-api-blog';
import { PostApiBlog$Params } from '../fn/operations/post-api-blog';
import { postApiBlogEditId } from '../fn/operations/post-api-blog-edit-id';
import { PostApiBlogEditId$Params } from '../fn/operations/post-api-blog-edit-id';
import { postApiBlogId } from '../fn/operations/post-api-blog-id';
import { PostApiBlogId$Params } from '../fn/operations/post-api-blog-id';
import { postApiError } from '../fn/operations/post-api-error';
import { PostApiError$Params } from '../fn/operations/post-api-error';
import { postApiErrorId } from '../fn/operations/post-api-error-id';
import { PostApiErrorId$Params } from '../fn/operations/post-api-error-id';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getApiBlog()` */
  static readonly GetApiBlogPath = '/api/blog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiBlog()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiBlog$Response(params?: GetApiBlog$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiBlog(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiBlog$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiBlog(params?: GetApiBlog$Params, context?: HttpContext): Observable<void> {
    return this.getApiBlog$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postApiBlog()` */
  static readonly PostApiBlogPath = '/api/blog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiBlog()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiBlog$Response(params?: PostApiBlog$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postApiBlog(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApiBlog$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiBlog(params?: PostApiBlog$Params, context?: HttpContext): Observable<void> {
    return this.postApiBlog$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteApiBlogDeleteId()` */
  static readonly DeleteApiBlogDeleteIdPath = '/api/blog/delete/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiBlogDeleteId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiBlogDeleteId$Response(params?: DeleteApiBlogDeleteId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteApiBlogDeleteId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteApiBlogDeleteId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiBlogDeleteId(params?: DeleteApiBlogDeleteId$Params, context?: HttpContext): Observable<void> {
    return this.deleteApiBlogDeleteId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postApiBlogEditId()` */
  static readonly PostApiBlogEditIdPath = '/api/blog/edit/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiBlogEditId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiBlogEditId$Response(params?: PostApiBlogEditId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postApiBlogEditId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApiBlogEditId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiBlogEditId(params?: PostApiBlogEditId$Params, context?: HttpContext): Observable<void> {
    return this.postApiBlogEditId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiBlogId()` */
  static readonly GetApiBlogIdPath = '/api/blog/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiBlogId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiBlogId$Response(params?: GetApiBlogId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiBlogId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiBlogId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiBlogId(params?: GetApiBlogId$Params, context?: HttpContext): Observable<void> {
    return this.getApiBlogId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postApiBlogId()` */
  static readonly PostApiBlogIdPath = '/api/blog/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiBlogId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiBlogId$Response(params?: PostApiBlogId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postApiBlogId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApiBlogId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiBlogId(params?: PostApiBlogId$Params, context?: HttpContext): Observable<void> {
    return this.postApiBlogId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiError()` */
  static readonly GetApiErrorPath = '/api/error';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiError()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiError$Response(params?: GetApiError$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiError(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiError$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiError(params?: GetApiError$Params, context?: HttpContext): Observable<void> {
    return this.getApiError$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postApiError()` */
  static readonly PostApiErrorPath = '/api/error';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiError()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiError$Response(params?: PostApiError$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postApiError(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApiError$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiError(params?: PostApiError$Params, context?: HttpContext): Observable<void> {
    return this.postApiError$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteApiErrorDeleteId()` */
  static readonly DeleteApiErrorDeleteIdPath = '/api/error/delete/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiErrorDeleteId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiErrorDeleteId$Response(params?: DeleteApiErrorDeleteId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteApiErrorDeleteId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteApiErrorDeleteId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiErrorDeleteId(params?: DeleteApiErrorDeleteId$Params, context?: HttpContext): Observable<void> {
    return this.deleteApiErrorDeleteId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteApiErrorDeleteAll()` */
  static readonly DeleteApiErrorDeleteAllPath = '/api/error/delete_all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiErrorDeleteAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiErrorDeleteAll$Response(params?: DeleteApiErrorDeleteAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteApiErrorDeleteAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteApiErrorDeleteAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiErrorDeleteAll(params?: DeleteApiErrorDeleteAll$Params, context?: HttpContext): Observable<void> {
    return this.deleteApiErrorDeleteAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiErrorId()` */
  static readonly GetApiErrorIdPath = '/api/error/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiErrorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiErrorId$Response(params?: GetApiErrorId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiErrorId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiErrorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiErrorId(params?: GetApiErrorId$Params, context?: HttpContext): Observable<void> {
    return this.getApiErrorId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postApiErrorId()` */
  static readonly PostApiErrorIdPath = '/api/error/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiErrorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiErrorId$Response(params?: PostApiErrorId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postApiErrorId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApiErrorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiErrorId(params?: PostApiErrorId$Params, context?: HttpContext): Observable<void> {
    return this.postApiErrorId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiHipnoterapija()` */
  static readonly GetApiHipnoterapijaPath = '/api/hipnoterapija';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiHipnoterapija()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiHipnoterapija$Response(params?: GetApiHipnoterapija$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiHipnoterapija(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiHipnoterapija$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiHipnoterapija(params?: GetApiHipnoterapija$Params, context?: HttpContext): Observable<void> {
    return this.getApiHipnoterapija$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiIndex()` */
  static readonly GetApiIndexPath = '/api/index';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIndex()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIndex$Response(params?: GetApiIndex$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiIndex(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiIndex$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIndex(params?: GetApiIndex$Params, context?: HttpContext): Observable<void> {
    return this.getApiIndex$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiIndexKnjiga()` */
  static readonly GetApiIndexKnjigaPath = '/api/index/knjiga';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIndexKnjiga()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIndexKnjiga$Response(params?: GetApiIndexKnjiga$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiIndexKnjiga(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiIndexKnjiga$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIndexKnjiga(params?: GetApiIndexKnjiga$Params, context?: HttpContext): Observable<void> {
    return this.getApiIndexKnjiga$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiJasnovidnost()` */
  static readonly GetApiJasnovidnostPath = '/api/jasnovidnost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiJasnovidnost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiJasnovidnost$Response(params?: GetApiJasnovidnost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiJasnovidnost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiJasnovidnost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiJasnovidnost(params?: GetApiJasnovidnost$Params, context?: HttpContext): Observable<void> {
    return this.getApiJasnovidnost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiMediji()` */
  static readonly GetApiMedijiPath = '/api/mediji';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMediji()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMediji$Response(params?: GetApiMediji$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiMediji(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiMediji$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMediji(params?: GetApiMediji$Params, context?: HttpContext): Observable<void> {
    return this.getApiMediji$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiMedijstvo()` */
  static readonly GetApiMedijstvoPath = '/api/medijstvo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMedijstvo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMedijstvo$Response(params?: GetApiMedijstvo$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiMedijstvo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiMedijstvo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMedijstvo(params?: GetApiMedijstvo$Params, context?: HttpContext): Observable<void> {
    return this.getApiMedijstvo$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiOmeni()` */
  static readonly GetApiOmeniPath = '/api/omeni';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiOmeni()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiOmeni$Response(params?: GetApiOmeni$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiOmeni(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiOmeni$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiOmeni(params?: GetApiOmeni$Params, context?: HttpContext): Observable<void> {
    return this.getApiOmeni$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiRegresija()` */
  static readonly GetApiRegresijaPath = '/api/regresija';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiRegresija()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRegresija$Response(params?: GetApiRegresija$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiRegresija(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiRegresija$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRegresija(params?: GetApiRegresija$Params, context?: HttpContext): Observable<void> {
    return this.getApiRegresija$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApiSamohipnoza()` */
  static readonly GetApiSamohipnozaPath = '/api/samohipnoza';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSamohipnoza()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSamohipnoza$Response(params?: GetApiSamohipnoza$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getApiSamohipnoza(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiSamohipnoza$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSamohipnoza(params?: GetApiSamohipnoza$Params, context?: HttpContext): Observable<void> {
    return this.getApiSamohipnoza$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
