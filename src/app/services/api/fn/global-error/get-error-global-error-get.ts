/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GlobalError } from '../../models/global-error';

export interface GetErrorGlobalErrorGet$Params {
}

export function getErrorGlobalErrorGet(http: HttpClient, rootUrl: string, params?: GetErrorGlobalErrorGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GlobalError>>> {
  const rb = new RequestBuilder(rootUrl, getErrorGlobalErrorGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GlobalError>>;
    })
  );
}

getErrorGlobalErrorGet.PATH = '/global_error/';
