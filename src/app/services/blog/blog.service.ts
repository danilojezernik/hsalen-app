import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "./blog";
import {environment} from "../../../environments/environment";
import {trace} from "../../utils/trace";
import {Router} from "@angular/router";
import {NewBlog} from "./newBlog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private BASE_PATH = environment.backUrl + '/api/blog'

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  @trace()
  getBlogAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.BASE_PATH}`)
  }

  @trace()
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.BASE_PATH}/${id}`);
  }

  @trace()
  dodajNoviBlog(newBlog: NewBlog) {
    this.http.post<Blog>(`${this.BASE_PATH}`, newBlog)
      .subscribe(() => {
        this.router.navigate(['/blog']);
      })
  }

  @trace()
  deleteBlogById(ide: any): Observable<any> {
    const id = ide._id["$oid"];
    return this.http.delete(`${this.BASE_PATH}/delete/${id}`)
  }

}
