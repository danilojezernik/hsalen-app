import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageGetService {

  /**
   * Use function to get about me pictures
   */
  public getImageUrl(imageName: string): string {
    return `${environment.backUrl}/gallery/${imageName}`
  }
}
