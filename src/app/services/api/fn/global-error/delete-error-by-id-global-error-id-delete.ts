/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GlobalError } from '../../models/global-error';

export interface DeleteErrorByIdGlobalErrorIdDelete$Params {
  '_id': string;
}

export function deleteErrorByIdGlobalErrorIdDelete(http: HttpClient, rootUrl: string, params: DeleteErrorByIdGlobalErrorIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<GlobalError>> {
  const rb = new RequestBuilder(rootUrl, deleteErrorByIdGlobalErrorIdDelete.PATH, 'delete');
  if (params) {
    rb.path('_id', params['_id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GlobalError>;
    })
  );
}

deleteErrorByIdGlobalErrorIdDelete.PATH = '/global_error/{_id}';
