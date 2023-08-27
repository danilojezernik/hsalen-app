import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Blog} from "../../data/blog/blog";
import {environment} from "../../../environments/environment";
import {trace} from "../../utils/trace";
import {Router} from "@angular/router";
import {NewBlog} from "../../data/blog/newBlog";
import {ApiService} from "../api/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private BASE_PATH = environment.backUrl + '/api/blog'

  constructor(
    private http: HttpClient,
    private router: Router,
    private api: ApiService
  ) {
  }

  @trace()
  getBlogAll(): Observable<Blog[]> {
   this.api.
  }

  @trace()
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.BASE_PATH}/${id}`).pipe(
      catchError(error => {
        console.error(`Napaka pri pridobivanju bloga z ID: ${id}`, error);
        return throwError('Pri pridobivanju blogov je šlo nekaj narobe. Prosim poskusite kasneje.');
      })
    )
  }

  @trace()
  dodajNoviBlog(newBlog: NewBlog) {
    this.http.post<Blog>(`${this.BASE_PATH}`, newBlog).pipe(
      catchError(error => {
        console.error(`Napaka pri dodajanju bloga`, error);
        return throwError('Pri dodajanju bloga je šlo nekaj narobe. Prosim poskusite kasneje.');
      })
    ).subscribe(() => {
      this.router.navigate(['/blog-pregled']);
    })
  }

  @trace()
  editBlog(blogId: any, updatedBlog: Blog): Observable<any> {
    return this.http.post<Blog>(`${this.BASE_PATH}/edit/${blogId}`, updatedBlog).pipe(
      catchError(error => {
        console.error(`Error editing blog with ID ${blogId}:`, error);
        return throwError('Something went wrong while editing the blog. Please try again later.');
      })
    );
  }

  @trace()
  deleteBlogById(ide: any): Observable<any> {
    const id = ide._id["$oid"];
    return this.http.delete(`${this.BASE_PATH}/delete/${id}`).pipe(
      catchError(error => {
        console.error(`Napaka pri izbrisu bloga z ID: ${id}:`, error);
        return throwError('Pri brisanju bloga je šlo nekaj narobe. Prosim poskusite kasneje.');
      })
    )
  }

}
