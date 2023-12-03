import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment.development";
import {Logging} from "../../models/logs";

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private http: HttpClient) {
  }

  /**
   * Adds a new post.
   * @param newLog The new post to be added.
   * @returns An observable of the added post.
   */
  addNewLogAdmin(newLog: Logging): Observable<Logging> {
    // Using Angular HttpClient to make a POST request to the specified API endpoint
    return this.http.post<Logging>(`${environment.backLogUrl}/logs_hsa`, newLog).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding a new post:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }
}
