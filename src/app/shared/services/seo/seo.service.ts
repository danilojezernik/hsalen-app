import {ApplicationRef, Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title, private _appRef: ApplicationRef) {

  }

  setPageTitle(title: string) {
    this.title.setTitle(title)
    this._appRef.tick()
  }

  setPageDescription(description: string) {
    this.meta.updateTag({name: 'description', content: description})
    this._appRef.tick()
  }

}
