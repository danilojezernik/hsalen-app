/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Regresija } from '../../models/regresija';

export interface GetRegresijaRegresijaGet$Params {
}

export function getRegresijaRegresijaGet(http: HttpClient, rootUrl: string, params?: GetRegresijaRegresijaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Regresija>>> {
  const rb = new RequestBuilder(rootUrl, getRegresijaRegresijaGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Regresija>>;
    })
  );
}

getRegresijaRegresijaGet.PATH = '/regresija/';
