import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

import {Blog} from "../../models/blog";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
  }

  // ***************** PUBLIC BLOG ******************* //

  /**
   * Fetches all blogs
   * @returns An observable of an array of posts.
   */
  getAllBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.backUrl}/blog`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the blog data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches a blog by its ID.
   * @param id The ID of the blog to fetch.
   * @returns An observable of the specified blog.
   */
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${environment.backUrl}/blog/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the blog data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  // ***************** ADMIN BLOG ******************* //

  /**
   * Fetches all blogs
   * @returns An observable of an array of posts.
   */
  getAllBlogAdmin(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.backUrl}/blog/admin/`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the blog data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Fetches a blog by its ID.
   * @param id The ID of the blog to fetch.
   * @returns An observable of the specified blog.
   */
  getBlogByIdAdmin(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${environment.backUrl}/blog/admin/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the blog data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Adds a new post.
   * @param newBlog The new post to be added.
   * @returns An observable of the added post.
   */
  addNewBlogAdmin(newBlog: Blog): Observable<Blog> {
    // Using Angular HttpClient to make a POST request to the specified API endpoint
    return this.http.post<Blog>(`${environment.backUrl}/blog/admin`, newBlog).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding a new post:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }


  /**
   * Fetches a blog by its ID.
   * @param id The ID of the blog to fetch.
   * @returns An observable of the specified blog.
   */
  deleteBlogByIdAdmin(id: string): Observable<any> {
    // Send a DELETE request to remove the blog post by its ID
    return this.http.delete<any>(`${environment.backUrl}/blog/admin/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the blog data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  /**
   * Edits a blog post in the admin interface.
   * @param id The ID of the blog post to edit.
   * @param newBody The updated content for the blog post.
   * @returns An observable of the updated blog post.
   */
  editBlogAdmin(id: string, newBody: Blog) {
    // Send a PUT request to update a blog post in the admin interface
    return this.http.put<Blog>(`${environment.backUrl}/blog/admin/${id}`, newBody).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error updating the blog post:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong');
      })
    );
  }

}
