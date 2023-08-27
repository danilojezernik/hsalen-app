import {Injectable} from '@angular/core';
import {trace} from "../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Index} from "../../data/index";
import {Hipnoterapija} from "../../data/hipnoterapija/hipnoterapija";
import {environment} from "../../../environments/environment";
import {Samohipnoza} from "../../data/samohipnoza/samohipnoza";
import {Regresija} from "../../data/regresija/regresija";

@Injectable({
  providedIn: 'root'
})
export class PublicGetDataService {

  private BASE_PATH_INDEX: string = environment.backUrl + '/api/index'
  private BASE_PATH_HIPNOTERAPIJA: string = environment.backUrl + '/api/hipnoterapija'
  private BASE_PATH_SAMOHIPNOZA: string = environment.backUrl + '/api/samohipnoza'
  private BASE_PATH_REGRESIJA: string = environment.backUrl + '/api/regresija'
  private BASE_PATH_JASNOVIDNOST: string = environment.backUrl + '/api/jasnovidnost'

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

  @trace()
  getSamohipnoza(): Observable<Samohipnoza[]> {
    return this.http.get<Samohipnoza[]>(`${this.BASE_PATH_SAMOHIPNOZA}`).pipe(
      catchError(error => {
        console.error(`Napaka pri pridobivanju podatkov iz ${this.BASE_PATH_SAMOHIPNOZA}: `, error)
        return throwError(`Pri pridobivanju podatkov iz ${this.BASE_PATH_SAMOHIPNOZA} je šlo nekaj narobe. Prosim poskusite kasneje.`)
      })
    )
  }

  @trace()
  getRegresija(): Observable<Regresija[]> {
    return this.http.get<Regresija[]>(`${this.BASE_PATH_REGRESIJA}`).pipe(
      catchError(error => {
        console.error(`Napaka pri pridobivanju podatkov iz ${this.BASE_PATH_REGRESIJA}: `, error)
        return throwError(`Pri pridobivanju podatkov iz ${this.BASE_PATH_REGRESIJA} je šlo nekaj narobe. Prosim poskusite kasneje.`)
      })
    )
  }

}
