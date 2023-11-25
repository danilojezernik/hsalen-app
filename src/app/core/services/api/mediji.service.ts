import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment.development";
import {Mediji} from "../../models/mediji";

@Injectable({
  providedIn: 'root'
})
export class MedijiService {

  constructor(private http: HttpClient) {
  }

  // ***************** PUBLIC MEDIJI ******************* //

  /**
   * Fetches all mediji
   * @returns An observable of an array of mediji.
   */
  getAllMediji(): Observable<Mediji[]> {
    return this.http.get<Mediji[]>(`${environment.backUrl}/mediji`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the public mediji data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  // ***************** ADMIN MEDIJI ******************* //

  /**
   * Fetches all mediji
   * @returns An observable of an array of mediji.
   */
  getAllMedijiAdmin(): Observable<Mediji[]> {
    return this.http.get<Mediji[]>(`${environment.backUrl}/mediji/admin/`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the mediji data from admin:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches a mediji by its ID.
   * @param id The ID of the mediji to fetch.
   * @returns An observable of the specified mediji.
   */
  getMedijiByIdAdmin(id: string): Observable<Mediji> {
    return this.http.get<Mediji>(`${environment.backUrl}/mediji/admin/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting mediji by id data from admin:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Adds a new mediji.
   * @param newMediji The new mediji to be added.
   * @returns An observable of the added mediji.
   */
  addNewMedijiAdmin(newMediji: Mediji): Observable<Mediji> {
    // Using Angular HttpClient to make a POST request to the specified API endpoint
    return this.http.post<Mediji>(`${environment.backUrl}/mediji/admin`, newMediji).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding a new mediji to admin:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }


  /**
   * Fetches a mediji by its ID.
   * @param id The ID of the mediji to fetch.
   * @returns An observable of the specified mediji.
   */
  deleteMedijiByIdAdmin(id: string): Observable<any> {
    // Send a DELETE request to remove the mediji post by its ID
    return this.http.delete<any>(`${environment.backUrl}/mediji/admin/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the mediji data from admin:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Edits a mediji post in the admin interface.
   * @param id The ID of the mediji post to edit.
   * @param newBody The updated content for the mediji post.
   * @returns An observable of the updated mediji post.
   */
  editMedijiAdmin(id: string, newBody: Mediji) {
    // Send a PUT request to update a mediji post in the admin interface
    return this.http.put<Mediji>(`${environment.backUrl}/mediji/admin/${id}`, newBody).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error updating the mediji post for admin:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong');
      })
    );
  }

}
