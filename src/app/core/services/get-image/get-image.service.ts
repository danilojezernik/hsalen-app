import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  /**
   * Use function to get about me pictures
   */
  public getImageUrl(imageName: Element): string {
    console.log(`${environment.backUrl}/gallery/${imageName}`)
    return `${environment.backUrl}/gallery/${imageName}`
  }

}
