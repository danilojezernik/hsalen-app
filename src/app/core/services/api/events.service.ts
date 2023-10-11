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

  // ***************** PRIVATE ADMIN ******************* //

  /**
   * Fetches all events
   * @returns An observable of an array of events.
   */
  getAllEventsAdmin(): Observable<Events[]> {
    return this.http.get<Events[]>(`${environment.backUrl}/events/admin/`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the private events data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches an event by its ID.
   * @param id The ID of an event to fetch.
   * @returns An observable of the specified event.
   */
  getEventByIdAdmin(id: string): Observable<Events> {
    return this.http.get<Events>(`${environment.backUrl}/events/admin/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the mediji data from admin:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Adds a new event.
   * @param newEvent The new event to be added.
   * @returns An observable of the added event.
   */
  addNewEvent(newEvent: Events): Observable<Events> {
    // Using Angular HttpClient to make a POST request to the specified API endpoint
    return this.http.post<Events>(`${environment.backUrl}/events/admin`, newEvent).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding new event to admin:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches an event by its ID.
   * @param id The ID of the event to fetch.
   * @returns An observable of the specified event.
   */
  deleteEvent(id: string): Observable<any> {
    // Using Angular HttpClient to make a POST request to the specified API endpoint
    return this.http.delete<any>(`${environment.backUrl}/events/admin/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error deleting event for admin:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Edits an event in the admin interface.
   * @param id The ID of an event to edit.
   * @param newBody The updated content for the event.
   * @returns An observable of the updated event.
   */
  editEvent(id: string, newBody: Events) {
    return this.http.put<Events>(`${environment.backUrl}/events/admin/${id}`, newBody).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding event for admin:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

}
