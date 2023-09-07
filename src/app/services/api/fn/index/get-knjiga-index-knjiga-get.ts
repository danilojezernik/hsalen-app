/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Knjiga } from '../../models/knjiga';

export interface GetKnjigaIndexKnjigaGet$Params {
}

export function getKnjigaIndexKnjigaGet(http: HttpClient, rootUrl: string, params?: GetKnjigaIndexKnjigaGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Knjiga>>> {
  const rb = new RequestBuilder(rootUrl, getKnjigaIndexKnjigaGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Knjiga>>;
    })
  );
}

getKnjigaIndexKnjigaGet.PATH = '/index/knjiga';
