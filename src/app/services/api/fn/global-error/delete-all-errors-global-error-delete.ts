/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GlobalError } from '../../models/global-error';

export interface DeleteAllErrorsGlobalErrorDelete$Params {
}

export function deleteAllErrorsGlobalErrorDelete(http: HttpClient, rootUrl: string, params?: DeleteAllErrorsGlobalErrorDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GlobalError>>> {
  const rb = new RequestBuilder(rootUrl, deleteAllErrorsGlobalErrorDelete.PATH, 'delete');
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

deleteAllErrorsGlobalErrorDelete.PATH = '/global_error/';
