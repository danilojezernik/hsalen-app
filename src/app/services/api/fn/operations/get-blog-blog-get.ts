/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Blog } from '../../models/blog';

export interface GetBlogBlogGet$Params {
}

export function getBlogBlogGet(http: HttpClient, rootUrl: string, params?: GetBlogBlogGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Blog>>> {
  const rb = new RequestBuilder(rootUrl, getBlogBlogGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Blog>>;
    })
  );
}

getBlogBlogGet.PATH = '/blog/';
