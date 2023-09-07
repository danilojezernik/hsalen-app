/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Hipnoterapija } from '../../models/hipnoterapija';

export interface GetHipnoterapijaHipnoterapijaGet$Params {
}

export function getHipnoterapijaHipnoterapijaGet(http: HttpClient, rootUrl: string, params?: GetHipnoterapijaHipnoterapijaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Hipnoterapija>>> {
  const rb = new RequestBuilder(rootUrl, getHipnoterapijaHipnoterapijaGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Hipnoterapija>>;
    })
  );
}

getHipnoterapijaHipnoterapijaGet.PATH = '/hipnoterapija/';
