/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Mediji } from '../../models/mediji';

export interface GetMedijiOmeniGet$Params {
}

export function getMedijiOmeniGet(http: HttpClient, rootUrl: string, params?: GetMedijiOmeniGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Mediji>>> {
  const rb = new RequestBuilder(rootUrl, getMedijiOmeniGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Mediji>>;
    })
  );
}

getMedijiOmeniGet.PATH = '/omeni/';
