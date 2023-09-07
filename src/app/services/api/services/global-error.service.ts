/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteAllErrorsGlobalErrorDelete } from '../fn/global-error/delete-all-errors-global-error-delete';
import { DeleteAllErrorsGlobalErrorDelete$Params } from '../fn/global-error/delete-all-errors-global-error-delete';
import { deleteErrorByIdGlobalErrorIdDelete } from '../fn/global-error/delete-error-by-id-global-error-id-delete';
import { DeleteErrorByIdGlobalErrorIdDelete$Params } from '../fn/global-error/delete-error-by-id-global-error-id-delete';
import { getErrorGlobalErrorGet } from '../fn/global-error/get-error-global-error-get';
import { GetErrorGlobalErrorGet$Params } from '../fn/global-error/get-error-global-error-get';
import { getErrorIdGlobalErrorIdGet } from '../fn/global-error/get-error-id-global-error-id-get';
import { GetErrorIdGlobalErrorIdGet$Params } from '../fn/global-error/get-error-id-global-error-id-get';
import { GlobalError } from '../models/global-error';
import { postErrorGlobalErrorPost } from '../fn/global-error/post-error-global-error-post';
import { PostErrorGlobalErrorPost$Params } from '../fn/global-error/post-error-global-error-post';
import { postErrorIdGlobalErrorIdPost } from '../fn/global-error/post-error-id-global-error-id-post';
import { PostErrorIdGlobalErrorIdPost$Params } from '../fn/global-error/post-error-id-global-error-id-post';


/**
 * uporablja se prefix /api/global_error za podatke o nastalih errorjih
 */
@Injectable({ providedIn: 'root' })
export class GlobalErrorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getErrorGlobalErrorGet()` */
  static readonly GetErrorGlobalErrorGetPath = '/global_error/';

  /**
   * Get Error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getErrorGlobalErrorGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorGlobalErrorGet$Response(params?: GetErrorGlobalErrorGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GlobalError>>> {
    return getErrorGlobalErrorGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getErrorGlobalErrorGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorGlobalErrorGet(params?: GetErrorGlobalErrorGet$Params, context?: HttpContext): Observable<Array<GlobalError>> {
    return this.getErrorGlobalErrorGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GlobalError>>): Array<GlobalError> => r.body)
    );
  }

  /** Path part for operation `postErrorGlobalErrorPost()` */
  static readonly PostErrorGlobalErrorPostPath = '/global_error/';

  /**
   * Post Error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postErrorGlobalErrorPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postErrorGlobalErrorPost$Response(params: PostErrorGlobalErrorPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GlobalError>> {
    return postErrorGlobalErrorPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Post Error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postErrorGlobalErrorPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postErrorGlobalErrorPost(params: PostErrorGlobalErrorPost$Params, context?: HttpContext): Observable<GlobalError> {
    return this.postErrorGlobalErrorPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GlobalError>): GlobalError => r.body)
    );
  }

  /** Path part for operation `deleteAllErrorsGlobalErrorDelete()` */
  static readonly DeleteAllErrorsGlobalErrorDeletePath = '/global_error/';

  /**
   * Delete All Errors.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAllErrorsGlobalErrorDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllErrorsGlobalErrorDelete$Response(params?: DeleteAllErrorsGlobalErrorDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GlobalError>>> {
    return deleteAllErrorsGlobalErrorDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete All Errors.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAllErrorsGlobalErrorDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllErrorsGlobalErrorDelete(params?: DeleteAllErrorsGlobalErrorDelete$Params, context?: HttpContext): Observable<Array<GlobalError>> {
    return this.deleteAllErrorsGlobalErrorDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GlobalError>>): Array<GlobalError> => r.body)
    );
  }

  /** Path part for operation `getErrorIdGlobalErrorIdGet()` */
  static readonly GetErrorIdGlobalErrorIdGetPath = '/global_error/{_id}';

  /**
   * Get Error Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getErrorIdGlobalErrorIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorIdGlobalErrorIdGet$Response(params: GetErrorIdGlobalErrorIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GlobalError>> {
    return getErrorIdGlobalErrorIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Error Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getErrorIdGlobalErrorIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getErrorIdGlobalErrorIdGet(params: GetErrorIdGlobalErrorIdGet$Params, context?: HttpContext): Observable<GlobalError> {
    return this.getErrorIdGlobalErrorIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GlobalError>): GlobalError => r.body)
    );
  }

  /** Path part for operation `postErrorIdGlobalErrorIdPost()` */
  static readonly PostErrorIdGlobalErrorIdPostPath = '/global_error/{_id}';

  /**
   * Post Error Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postErrorIdGlobalErrorIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  postErrorIdGlobalErrorIdPost$Response(params: PostErrorIdGlobalErrorIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GlobalError>> {
    return postErrorIdGlobalErrorIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Post Error Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postErrorIdGlobalErrorIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postErrorIdGlobalErrorIdPost(params: PostErrorIdGlobalErrorIdPost$Params, context?: HttpContext): Observable<GlobalError> {
    return this.postErrorIdGlobalErrorIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GlobalError>): GlobalError => r.body)
    );
  }

  /** Path part for operation `deleteErrorByIdGlobalErrorIdDelete()` */
  static readonly DeleteErrorByIdGlobalErrorIdDeletePath = '/global_error/{_id}';

  /**
   * Delete Error By Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteErrorByIdGlobalErrorIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteErrorByIdGlobalErrorIdDelete$Response(params: DeleteErrorByIdGlobalErrorIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<GlobalError>> {
    return deleteErrorByIdGlobalErrorIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Error By Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteErrorByIdGlobalErrorIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteErrorByIdGlobalErrorIdDelete(params: DeleteErrorByIdGlobalErrorIdDelete$Params, context?: HttpContext): Observable<GlobalError> {
    return this.deleteErrorByIdGlobalErrorIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<GlobalError>): GlobalError => r.body)
    );
  }

}
