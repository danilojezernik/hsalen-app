/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Samohipnoza } from '../../models/samohipnoza';

export interface GetSamohipnozaSamohipnozaGet$Params {
}

export function getSamohipnozaSamohipnozaGet(http: HttpClient, rootUrl: string, params?: GetSamohipnozaSamohipnozaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Samohipnoza>>> {
  const rb = new RequestBuilder(rootUrl, getSamohipnozaSamohipnozaGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Samohipnoza>>;
    })
  );
}

getSamohipnozaSamohipnozaGet.PATH = '/samohipnoza/';
