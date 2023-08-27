/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteAllErrorsApiErrorDeleteAllDelete } from '../fn/operations/delete-all-errors-api-error-delete-all-delete';
import { DeleteAllErrorsApiErrorDeleteAllDelete$Params } from '../fn/operations/delete-all-errors-api-error-delete-all-delete';
import { deleteBlogApiBlogDeleteIdDelete } from '../fn/operations/delete-blog-api-blog-delete-id-delete';
import { DeleteBlogApiBlogDeleteIdDelete$Params } from '../fn/operations/delete-blog-api-blog-delete-id-delete';
import { deleteErrorByIdApiErrorDeleteIdDelete } from '../fn/operations/delete-error-by-id-api-error-delete-id-delete';
import { DeleteErrorByIdApiErrorDeleteIdDelete$Params } from '../fn/operations/delete-error-by-id-api-error-delete-id-delete';
import { editBlogApiBlogEditIdPost } from '../fn/operations/edit-blog-api-blog-edit-id-post';
import { EditBlogApiBlogEditIdPost$Params } from '../fn/operations/edit-blog-api-blog-edit-id-post';
import { getBlogApiBlogGet } from '../fn/operations/get-blog-api-blog-get';
import { GetBlogApiBlogGet$Params } from '../fn/operations/get-blog-api-blog-get';
import { getBlogIdApiBlogIdGet } from '../fn/operations/get-blog-id-api-blog-id-get';
import { GetBlogIdApiBlogIdGet$Params } from '../fn/operations/get-blog-id-api-blog-id-get';
import { getErrorApiErrorGet } from '../fn/operations/get-error-api-error-get';
import { GetErrorApiErrorGet$Params } from '../fn/operations/get-error-api-error-get';
import { getErrorIdApiErrorIdGet } from '../fn/operations/get-error-id-api-error-id-get';
import { GetErrorIdApiErrorIdGet$Params } from '../fn/operations/get-error-id-api-error-id-get';
import { getHipnoterapijaApiHipnoterapijaGet } from '../fn/operations/get-hipnoterapija-api-hipnoterapija-get';
import { GetHipnoterapijaApiHipnoterapijaGet$Params } from '../fn/operations/get-hipnoterapija-api-hipnoterapija-get';
import { getIndexApiIndexGet } from '../fn/operations/get-index-api-index-get';
import { GetIndexApiIndexGet$Params } from '../fn/operations/get-index-api-index-get';
import { getJasnovidnostApiJasnovidnostGet } from '../fn/operations/get-jasnovidnost-api-jasnovidnost-get';
import { GetJasnovidnostApiJasnovidnostGet$Params } from '../fn/operations/get-jasnovidnost-api-jasnovidnost-get';
import { getKnjigaApiIndexKnjigaGet } from '../fn/operations/get-knjiga-api-index-knjiga-get';
import { GetKnjigaApiIndexKnjigaGet$Params } from '../fn/operations/get-knjiga-api-index-knjiga-get';
import { getMedijiApiMedijiGet } from '../fn/operations/get-mediji-api-mediji-get';
import { GetMedijiApiMedijiGet$Params } from '../fn/operations/get-mediji-api-mediji-get';
import { getMedijstvoApiMedijstvoGet } from '../fn/operations/get-medijstvo-api-medijstvo-get';
import { GetMedijstvoApiMedijstvoGet$Params } from '../fn/operations/get-medijstvo-api-medijstvo-get';
import { getOmeniApiOmeniGet } from '../fn/operations/get-omeni-api-omeni-get';
import { GetOmeniApiOmeniGet$Params } from '../fn/operations/get-omeni-api-omeni-get';
import { getRegresijaApiRegresijaGet } from '../fn/operations/get-regresija-api-regresija-get';
import { GetRegresijaApiRegresijaGet$Params } from '../fn/operations/get-regresija-api-regresija-get';
import { getSamohipnozaApiSamohipnozaGet } from '../fn/operations/get-samohipnoza-api-samohipnoza-get';
import { GetSamohipnozaApiSamohipnozaGet$Params } from '../fn/operations/get-samohipnoza-api-samohipnoza-get';
import { postBlogApiBlogPost } from '../fn/operations/post-blog-api-blog-post';
import { PostBlogApiBlogPost$Params } from '../fn/operations/post-blog-api-blog-post';
import { postBlogIdApiBlogIdPost } from '../fn/operations/post-blog-id-api-blog-id-post';
import { PostBlogIdApiBlogIdPost$Params } from '../fn/operations/post-blog-id-api-blog-id-post';
import { postErrorApiErrorPost } from '../fn/operations/post-error-api-error-post';
import { PostErrorApiErrorPost$Params } from '../fn/operations/post-error-api-error-post';
import { postErrorIdApiErrorIdPost } from '../fn/operations/post-error-id-api-error-id-post';
import { PostErrorIdApiErrorIdPost$Params } from '../fn/operations/post-error-id-api-error-id-post';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getBlogApiBlogGet()` */
  static readonly GetBlogApiBlogGetPath = '/api/blog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBlogApiBlogGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogApiBlogGet$Response(params?: GetBlogApiBlogGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getBlogApiBlogGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBlogApiBlogGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogApiBlogGet(params?: GetBlogApiBlogGet$Params, context?: HttpContext): Observable<void> {
    return this.getBlogApiBlogGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postBlogApiBlogPost()` */
  static readonly PostBlogApiBlogPostPath = '/api/blog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBlogApiBlogPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  postBlogApiBlogPost$Response(params?: PostBlogApiBlogPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postBlogApiBlogPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBlogApiBlogPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postBlogApiBlogPost(params?: PostBlogApiBlogPost$Params, context?: HttpContext): Observable<void> {
    return this.postBlogApiBlogPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteBlogApiBlogDeleteIdDelete()` */
  static readonly DeleteBlogApiBlogDeleteIdDeletePath = '/api/blog/delete/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBlogApiBlogDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBlogApiBlogDeleteIdDelete$Response(params?: DeleteBlogApiBlogDeleteIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteBlogApiBlogDeleteIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBlogApiBlogDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBlogApiBlogDeleteIdDelete(params?: DeleteBlogApiBlogDeleteIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteBlogApiBlogDeleteIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `editBlogApiBlogEditIdPost()` */
  static readonly EditBlogApiBlogEditIdPostPath = '/api/blog/edit/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editBlogApiBlogEditIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  editBlogApiBlogEditIdPost$Response(params?: EditBlogApiBlogEditIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return editBlogApiBlogEditIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editBlogApiBlogEditIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  editBlogApiBlogEditIdPost(params?: EditBlogApiBlogEditIdPost$Params, context?: HttpContext): Observable<void> {
    return this.editBlogApiBlogEditIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getBlogIdApiBlogIdGet()` */
  static readonly GetBlogIdApiBlogIdGetPath = '/api/blog/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBlogIdApiBlogIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogIdApiBlogIdGet$Response(params?: GetBlogIdApiBlogIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getBlogIdApiBlogIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBlogIdApiBlogIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogIdApiBlogIdGet(params?: GetBlogIdApiBlogIdGet$Params, context?: HttpContext): Observable<void> {
    return this.getBlogIdApiBlogIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postBlogIdApiBlogIdPost()` */
  static readonly PostBlogIdApiBlogIdPostPath = '/api/blog/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBlogIdApiBlogIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  postBlogIdApiBlogIdPost$Response(params?: PostBlogIdApiBlogIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postBlogIdApiBlogIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBlogIdApiBlogIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postBlogIdApiBlogIdPost(params?: PostBlogIdApiBlogIdPost$Params, context?: HttpContext): Observable<void> {
    return this.postBlogIdApiBlogIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getErrorApiErrorGet()` */
  static readonly GetErrorApiErrorGetPath = '/api/error';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getErrorApiErrorGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorApiErrorGet$Response(params?: GetErrorApiErrorGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getErrorApiErrorGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getErrorApiErrorGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorApiErrorGet(params?: GetErrorApiErrorGet$Params, context?: HttpContext): Observable<void> {
    return this.getErrorApiErrorGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postErrorApiErrorPost()` */
  static readonly PostErrorApiErrorPostPath = '/api/error';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postErrorApiErrorPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  postErrorApiErrorPost$Response(params?: PostErrorApiErrorPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postErrorApiErrorPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postErrorApiErrorPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postErrorApiErrorPost(params?: PostErrorApiErrorPost$Params, context?: HttpContext): Observable<void> {
    return this.postErrorApiErrorPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteErrorByIdApiErrorDeleteIdDelete()` */
  static readonly DeleteErrorByIdApiErrorDeleteIdDeletePath = '/api/error/delete/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteErrorByIdApiErrorDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteErrorByIdApiErrorDeleteIdDelete$Response(params?: DeleteErrorByIdApiErrorDeleteIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteErrorByIdApiErrorDeleteIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteErrorByIdApiErrorDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteErrorByIdApiErrorDeleteIdDelete(params?: DeleteErrorByIdApiErrorDeleteIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteErrorByIdApiErrorDeleteIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteAllErrorsApiErrorDeleteAllDelete()` */
  static readonly DeleteAllErrorsApiErrorDeleteAllDeletePath = '/api/error/delete_all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAllErrorsApiErrorDeleteAllDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllErrorsApiErrorDeleteAllDelete$Response(params?: DeleteAllErrorsApiErrorDeleteAllDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAllErrorsApiErrorDeleteAllDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAllErrorsApiErrorDeleteAllDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllErrorsApiErrorDeleteAllDelete(params?: DeleteAllErrorsApiErrorDeleteAllDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteAllErrorsApiErrorDeleteAllDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getErrorIdApiErrorIdGet()` */
  static readonly GetErrorIdApiErrorIdGetPath = '/api/error/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getErrorIdApiErrorIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorIdApiErrorIdGet$Response(params?: GetErrorIdApiErrorIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getErrorIdApiErrorIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getErrorIdApiErrorIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorIdApiErrorIdGet(params?: GetErrorIdApiErrorIdGet$Params, context?: HttpContext): Observable<void> {
    return this.getErrorIdApiErrorIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postErrorIdApiErrorIdPost()` */
  static readonly PostErrorIdApiErrorIdPostPath = '/api/error/{_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postErrorIdApiErrorIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  postErrorIdApiErrorIdPost$Response(params?: PostErrorIdApiErrorIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postErrorIdApiErrorIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postErrorIdApiErrorIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postErrorIdApiErrorIdPost(params?: PostErrorIdApiErrorIdPost$Params, context?: HttpContext): Observable<void> {
    return this.postErrorIdApiErrorIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getHipnoterapijaApiHipnoterapijaGet()` */
  static readonly GetHipnoterapijaApiHipnoterapijaGetPath = '/api/hipnoterapija';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHipnoterapijaApiHipnoterapijaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHipnoterapijaApiHipnoterapijaGet$Response(params?: GetHipnoterapijaApiHipnoterapijaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getHipnoterapijaApiHipnoterapijaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHipnoterapijaApiHipnoterapijaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHipnoterapijaApiHipnoterapijaGet(params?: GetHipnoterapijaApiHipnoterapijaGet$Params, context?: HttpContext): Observable<void> {
    return this.getHipnoterapijaApiHipnoterapijaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getIndexApiIndexGet()` */
  static readonly GetIndexApiIndexGetPath = '/api/index';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIndexApiIndexGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIndexApiIndexGet$Response(params?: GetIndexApiIndexGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getIndexApiIndexGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIndexApiIndexGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIndexApiIndexGet(params?: GetIndexApiIndexGet$Params, context?: HttpContext): Observable<void> {
    return this.getIndexApiIndexGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getKnjigaApiIndexKnjigaGet()` */
  static readonly GetKnjigaApiIndexKnjigaGetPath = '/api/index/knjiga';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKnjigaApiIndexKnjigaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKnjigaApiIndexKnjigaGet$Response(params?: GetKnjigaApiIndexKnjigaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getKnjigaApiIndexKnjigaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getKnjigaApiIndexKnjigaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKnjigaApiIndexKnjigaGet(params?: GetKnjigaApiIndexKnjigaGet$Params, context?: HttpContext): Observable<void> {
    return this.getKnjigaApiIndexKnjigaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getJasnovidnostApiJasnovidnostGet()` */
  static readonly GetJasnovidnostApiJasnovidnostGetPath = '/api/jasnovidnost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getJasnovidnostApiJasnovidnostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getJasnovidnostApiJasnovidnostGet$Response(params?: GetJasnovidnostApiJasnovidnostGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getJasnovidnostApiJasnovidnostGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getJasnovidnostApiJasnovidnostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getJasnovidnostApiJasnovidnostGet(params?: GetJasnovidnostApiJasnovidnostGet$Params, context?: HttpContext): Observable<void> {
    return this.getJasnovidnostApiJasnovidnostGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getMedijiApiMedijiGet()` */
  static readonly GetMedijiApiMedijiGetPath = '/api/mediji';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMedijiApiMedijiGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijiApiMedijiGet$Response(params?: GetMedijiApiMedijiGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getMedijiApiMedijiGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMedijiApiMedijiGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijiApiMedijiGet(params?: GetMedijiApiMedijiGet$Params, context?: HttpContext): Observable<void> {
    return this.getMedijiApiMedijiGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getMedijstvoApiMedijstvoGet()` */
  static readonly GetMedijstvoApiMedijstvoGetPath = '/api/medijstvo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMedijstvoApiMedijstvoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijstvoApiMedijstvoGet$Response(params?: GetMedijstvoApiMedijstvoGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getMedijstvoApiMedijstvoGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMedijstvoApiMedijstvoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedijstvoApiMedijstvoGet(params?: GetMedijstvoApiMedijstvoGet$Params, context?: HttpContext): Observable<void> {
    return this.getMedijstvoApiMedijstvoGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getOmeniApiOmeniGet()` */
  static readonly GetOmeniApiOmeniGetPath = '/api/omeni';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOmeniApiOmeniGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOmeniApiOmeniGet$Response(params?: GetOmeniApiOmeniGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getOmeniApiOmeniGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOmeniApiOmeniGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOmeniApiOmeniGet(params?: GetOmeniApiOmeniGet$Params, context?: HttpContext): Observable<void> {
    return this.getOmeniApiOmeniGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getRegresijaApiRegresijaGet()` */
  static readonly GetRegresijaApiRegresijaGetPath = '/api/regresija';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRegresijaApiRegresijaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegresijaApiRegresijaGet$Response(params?: GetRegresijaApiRegresijaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getRegresijaApiRegresijaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRegresijaApiRegresijaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegresijaApiRegresijaGet(params?: GetRegresijaApiRegresijaGet$Params, context?: HttpContext): Observable<void> {
    return this.getRegresijaApiRegresijaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getSamohipnozaApiSamohipnozaGet()` */
  static readonly GetSamohipnozaApiSamohipnozaGetPath = '/api/samohipnoza';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSamohipnozaApiSamohipnozaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSamohipnozaApiSamohipnozaGet$Response(params?: GetSamohipnozaApiSamohipnozaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getSamohipnozaApiSamohipnozaGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSamohipnozaApiSamohipnozaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSamohipnozaApiSamohipnozaGet(params?: GetSamohipnozaApiSamohipnozaGet$Params, context?: HttpContext): Observable<void> {
    return this.getSamohipnozaApiSamohipnozaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
