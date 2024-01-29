import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Review} from "../../models/review";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {
  }

  /**
   * Fetches all reviews
   * @returns An observable of an array of reviews.
   */
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.backUrl}/review`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the public mediji data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches a review by its ID.
   * @param id The ID of the review to fetch.
   * @returns An observable of the specified review.
   */
  getReviewById(id: string): Observable<Review> {
    return this.http.get<Review>(`${environment.backUrl}/review/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting review by id:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Adds a new review.
   * @param newReview The new review to be added.
   * @returns An observable of the added review.
   */
  addNewReview(newReview: Review): Observable<Review> {
    return this.http.post<Review>(`${environment.backUrl}/review`, newReview).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding a new review:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches a review by its ID.
   * @param id The ID of the review to fetch.
   * @returns An observable of the specified review.
   */
  deleteReviewById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.backUrl}/review/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the review data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Edits a review post.
   * @param id The ID of the review post to edit.
   * @param newReview The updated content for the review post.
   * @returns An observable of the updated review post.
   */
  editReviewById(id: string, newReview: Review) {
    return this.http.put<Review>(`${environment.backUrl}/review/${id}`, newReview).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error updating the review post:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong');
      })
    )
  }

}
