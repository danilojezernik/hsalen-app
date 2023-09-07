/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Blog } from '../models/blog';
import { deleteBlogBlogIdDelete } from '../fn/blog/delete-blog-blog-id-delete';
import { DeleteBlogBlogIdDelete$Params } from '../fn/blog/delete-blog-blog-id-delete';
import { editBlogBlogEditIdPost } from '../fn/blog/edit-blog-blog-edit-id-post';
import { EditBlogBlogEditIdPost$Params } from '../fn/blog/edit-blog-blog-edit-id-post';
import { getBlogBlogGet } from '../fn/blog/get-blog-blog-get';
import { GetBlogBlogGet$Params } from '../fn/blog/get-blog-blog-get';
import { getBlogIdBlogIdGet } from '../fn/blog/get-blog-id-blog-id-get';
import { GetBlogIdBlogIdGet$Params } from '../fn/blog/get-blog-id-blog-id-get';
import { postBlogBlogPost } from '../fn/blog/post-blog-blog-post';
import { PostBlogBlogPost$Params } from '../fn/blog/post-blog-blog-post';
import { postBlogIdBlogIdPost } from '../fn/blog/post-blog-id-blog-id-post';
import { PostBlogIdBlogIdPost$Params } from '../fn/blog/post-blog-id-blog-id-post';


/**
 * uporablja se prefix /api/blog
 */
@Injectable({ providedIn: 'root' })
export class BlogService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getBlogBlogGet()` */
  static readonly GetBlogBlogGetPath = '/blog/';

  /**
   * Get Blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBlogBlogGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogBlogGet$Response(params?: GetBlogBlogGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Blog>>> {
    return getBlogBlogGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBlogBlogGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogBlogGet(params?: GetBlogBlogGet$Params, context?: HttpContext): Observable<Array<Blog>> {
    return this.getBlogBlogGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Blog>>): Array<Blog> => r.body)
    );
  }

  /** Path part for operation `postBlogBlogPost()` */
  static readonly PostBlogBlogPostPath = '/blog/';

  /**
   * Post Blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBlogBlogPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postBlogBlogPost$Response(params: PostBlogBlogPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Blog>> {
    return postBlogBlogPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Post Blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBlogBlogPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postBlogBlogPost(params: PostBlogBlogPost$Params, context?: HttpContext): Observable<Blog> {
    return this.postBlogBlogPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blog>): Blog => r.body)
    );
  }

  /** Path part for operation `getBlogIdBlogIdGet()` */
  static readonly GetBlogIdBlogIdGetPath = '/blog/{_id}';

  /**
   * Get Blog Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBlogIdBlogIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogIdBlogIdGet$Response(params: GetBlogIdBlogIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blog>> {
    return getBlogIdBlogIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Blog Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBlogIdBlogIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBlogIdBlogIdGet(params: GetBlogIdBlogIdGet$Params, context?: HttpContext): Observable<Blog> {
    return this.getBlogIdBlogIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blog>): Blog => r.body)
    );
  }

  /** Path part for operation `postBlogIdBlogIdPost()` */
  static readonly PostBlogIdBlogIdPostPath = '/blog/{_id}';

  /**
   * Post Blog Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBlogIdBlogIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  postBlogIdBlogIdPost$Response(params: PostBlogIdBlogIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Blog>> {
    return postBlogIdBlogIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Post Blog Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBlogIdBlogIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postBlogIdBlogIdPost(params: PostBlogIdBlogIdPost$Params, context?: HttpContext): Observable<Blog> {
    return this.postBlogIdBlogIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blog>): Blog => r.body)
    );
  }

  /** Path part for operation `deleteBlogBlogIdDelete()` */
  static readonly DeleteBlogBlogIdDeletePath = '/blog/{_id}';

  /**
   * Delete Blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBlogBlogIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBlogBlogIdDelete$Response(params: DeleteBlogBlogIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<Blog>> {
    return deleteBlogBlogIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBlogBlogIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBlogBlogIdDelete(params: DeleteBlogBlogIdDelete$Params, context?: HttpContext): Observable<Blog> {
    return this.deleteBlogBlogIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blog>): Blog => r.body)
    );
  }

  /** Path part for operation `editBlogBlogEditIdPost()` */
  static readonly EditBlogBlogEditIdPostPath = '/blog/edit/{_id}';

  /**
   * Edit Blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editBlogBlogEditIdPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editBlogBlogEditIdPost$Response(params: EditBlogBlogEditIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Blog>> {
    return editBlogBlogEditIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Edit Blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editBlogBlogEditIdPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editBlogBlogEditIdPost(params: EditBlogBlogEditIdPost$Params, context?: HttpContext): Observable<Blog> {
    return this.editBlogBlogEditIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blog>): Blog => r.body)
    );
  }

}
