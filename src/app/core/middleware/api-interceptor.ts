import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {TokenService} from "../services/token/token.service";

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  static count: number = 0

  constructor(
    private dbService: TokenService
  ) {
  }

  // The interceptor does not work nice with @trace
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const self = this
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.dbService.getToken()}`
      }
    });
    const count = ++HttpApiInterceptor.count
    console.log(`${count} REQ `, req)
    return next.handle(req).pipe(
      tap({
        next(ele: any) {
          if (ele instanceof HttpResponse) {
            console.info(`${count} RES `, ele)
          }
          return ele
        },
        error(err: HttpErrorResponse) {
          alert(JSON.stringify(err))
          console.error(`${count} RES `, err)
        }
      }))
  }

}
