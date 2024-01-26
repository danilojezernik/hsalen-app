import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Newsletter} from "../../models/newsletter";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) {
  }

  /**
   * Fetches all newsletter
   * @returns An observable of an array of newsletter.
   */
  getAllNewsletter(): Observable<Newsletter[]> {
    return this.http.get<Newsletter[]>(`${environment.backUrl}/newsletter/`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all newsletter:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }


  /**
   * Fetches a newsletter by its ID.
   * @param id The ID of a newsletter to fetch.
   * @returns An observable of the specified newsletter.
   */
  getNewsletterById(id: string): Observable<Newsletter> {
    return this.http.get<Newsletter>(`${environment.backUrl}/newsletter/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting newsletter by ID:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches a newsletter by its ID
   * @param id The ID of a newsletter to fecth
   * @returns Observable of the specified newsletter
   * */
  deleteNewsletterById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.backUrl}/newsletter/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error deleting newsletter data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Sends a newsletter.
   * @param newBody The newsletter to be sent.
   * @returns An observable representing the result of the newsletter sending operation.
   */
  sendNewsletter(newBody: Newsletter): Observable<Newsletter> {
    return this.http.post<Newsletter>(`${environment.backUrl}/newsletter/send-newsletter`, newBody).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error sending a newsletter:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

}
