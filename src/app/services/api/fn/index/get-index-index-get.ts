/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Index } from '../../models/index';

export interface GetIndexIndexGet$Params {
}

export function getIndexIndexGet(http: HttpClient, rootUrl: string, params?: GetIndexIndexGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Index>>> {
  const rb = new RequestBuilder(rootUrl, getIndexIndexGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Index>>;
    })
  );
}

getIndexIndexGet.PATH = '/index/';
