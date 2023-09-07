/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GlobalError } from '../../models/global-error';

export interface PostErrorGlobalErrorPost$Params {
      body: GlobalError
}

export function postErrorGlobalErrorPost(http: HttpClient, rootUrl: string, params: PostErrorGlobalErrorPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GlobalError>> {
  const rb = new RequestBuilder(rootUrl, postErrorGlobalErrorPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postErrorGlobalErrorPost.PATH = '/global_error/';
