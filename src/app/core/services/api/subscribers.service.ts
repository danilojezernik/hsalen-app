import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscriber} from "../../models/subscriber";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private http: HttpClient) {
  }

  /**
   * Fetches all subscribers
   * @returns An observable of an array of subscribers.
   */
  getAllSubscribers(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(`${environment.backUrl}/subscribers/`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all subscribers:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Adds a new subscriber.
   * @param newSubscriber The new subscriber to be added.
   * @returns An observable of the added subscriber.
   */
  addNewSubscriber(newSubscriber: Subscriber): Observable<Subscriber> {
    // Using Angular HttpClient to make a POST request to the specified API endpoint
    return this.http.post<Subscriber>(`${environment.backUrl}/subscribers`, newSubscriber).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding new subscriber:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches a subscriber by its ID
   * @param id The ID of a subscriber to fecth
   * @returns Observable of the specified subscriber
   * */
  deleteSubscriberById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.backUrl}/subscribers/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error deleting subscribers data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }
}
