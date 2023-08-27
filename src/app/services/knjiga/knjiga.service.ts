import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {trace} from "../../utils/trace";
import {catchError, Observable, throwError} from "rxjs";
import {Knjiga} from "../../data/knjiga/knjiga";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  private BASE_PATH_KNJIGA: string = environment.backUrl + '/api/index/knjiga'

  constructor(private http: HttpClient) {
  }

  @trace()
  getKnjiga(): Observable<Knjiga[]> {
    return this.http.get<Knjiga[]>(`${this.BASE_PATH_KNJIGA}`).pipe(
      catchError(error => {
        console.error(`Napaka pri pridobivanju podatkov iz ${this.BASE_PATH_KNJIGA}: `, error)
        return throwError(`Pri pridobivanju podatkov iz ${this.BASE_PATH_KNJIGA} je šlo nekaj narobe. Prosim poskusite kasneje.`)
      })
    )
  }

}
