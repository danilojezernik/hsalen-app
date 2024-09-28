import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private _http = inject(HttpClient)


  getAllImages(): Observable<{ images: string[] }> {
    return this._http.get<{ images: string[] }>(`${environment.backUrl}/gallery/images/`)
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData()
    formData.append('file', file, file.name)

    return this._http.post<any>(`${environment.backUrl}/gallery/`, formData)
  }

  deleteImageByName(filename: string): Observable<any> {
    return this._http.delete<any>(`${environment.backUrl}/gallery/${filename}`)
  }

}
