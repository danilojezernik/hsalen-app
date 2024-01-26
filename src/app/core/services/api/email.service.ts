import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Email} from "../../models/email";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  // ***************** PUBLIC CONTACT ******************* //

  /**
   * Sends an email.
   * @param newBody The email to be sent.
   * @returns An observable representing the result of the email sending operation.
   */
  sendEmail(newBody: Email): Observable<Email> {
    return this.http.post<Email>(`${environment.backUrl}/email/send-email`, newBody).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error sending an email:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  // ***************** ADMIN CONTACT ******************* //

  /**
   * Fetches all emails
   * @returns An observable of an array of emails.
   */
  getAllEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(`${environment.backUrl}/email/`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all emails:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches an email by its ID
   * @param id The ID of an email to fecth
   * @returns Observable of the specified email
   * */
  deleteEmailByIdAdmin(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.backUrl}/email/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the emails data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

}
