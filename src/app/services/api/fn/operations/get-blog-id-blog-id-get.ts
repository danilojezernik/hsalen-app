/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Blog } from '../../models/blog';

export interface GetBlogIdBlogIdGet$Params {
  '_id': string;
}

export function getBlogIdBlogIdGet(http: HttpClient, rootUrl: string, params: GetBlogIdBlogIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blog>> {
  const rb = new RequestBuilder(rootUrl, getBlogIdBlogIdGet.PATH, 'get');
  if (params) {
    rb.path('_id', params['_id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blog>;
    })
  );
}

getBlogIdBlogIdGet.PATH = '/blog/{_id}';
