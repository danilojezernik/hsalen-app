import {Injectable} from '@angular/core';
import {trace} from "../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Index} from "../../data/index";
import {Hipnoterapija} from "../../data/hipnoterapija/hipnoterapija";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PublicGetDataService {

  private BASE_PATH_INDEX: string = environment.backUrl + '/api/index'
  private BASE_PATH_HIPNOTERAPIJA: string = environment.backUrl + '/api/hipnoterapija'

  constructor(
    private http: HttpClient,
  ) {
  }

  @trace()
  getIndex(): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.BASE_PATH_INDEX}`).pipe(
      catchError(error => {
        console.error(`Napaka pri pridobivanju podatkov iz ${this.BASE_PATH_INDEX}: `, error)
        return throwError(`Pri pridobivanju podatkov iz ${this.BASE_PATH_INDEX} je šlo nekaj narobe. Prosim poskusite kasneje.`)
      })
    )
  }

  @trace()
  getHipnoterapija(): Observable<Hipnoterapija[]> {
    return this.http.get<Hipnoterapija[]>(`${this.BASE_PATH_HIPNOTERAPIJA}`).pipe(
      catchError(error => {
        console.error(`Napaka pri pridobivanju podatkov iz ${this.BASE_PATH_HIPNOTERAPIJA}: `, error)
        return throwError(`Pri pridobivanju podatkov iz ${this.BASE_PATH_HIPNOTERAPIJA} je šlo nekaj narobe. Prosim poskusite kasneje.`)
      })
    )
  }

}
