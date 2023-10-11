import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Events} from "../../models/events";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {
  }

  // ***************** PUBLIC EVENTS ******************* //

  /**
   * Fetches all events
   * @returns An observable of an array of events.
   */
  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`${environment.backUrl}/events`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the public events data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  // ***************** PUBLIC ADMIN ******************* //


}
